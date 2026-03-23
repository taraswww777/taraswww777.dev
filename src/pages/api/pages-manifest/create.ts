import type { NextApiRequest, NextApiResponse } from 'next';
import { createArticle } from 'src/lib/articleOperations';

type Body = { slug: string; title: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  const body = req.body as Body | undefined;
  if (!body || typeof body.slug !== 'string' || typeof body.title !== 'string') {
    return res.status(400).json({ error: 'Body: { slug: string, title: string }' });
  }

  const slug = body.slug.trim();
  const title = body.title.trim();
  if (!slug || !title) {
    return res.status(400).json({ error: 'slug and title required' });
  }

  if (!/^[a-z0-9-]+$/.test(slug)) {
    return res.status(400).json({ error: 'slug: только латиница, цифры, дефисы' });
  }

  try {
    await createArticle(slug, title);
    const manifest = await import('src/lib/pagesManifest').then((m) => m.getPagesManifest());
    res.status(201).json(manifest);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('EEXIST') || msg.includes('already exists')) {
      return res.status(409).json({ error: `Статья "${slug}" уже существует` });
    }
    console.error('POST /api/pages-manifest/create:', err);
    res.status(500).json({ error: msg });
  }
}
