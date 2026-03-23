import type { NextApiRequest, NextApiResponse } from 'next';
import { renameArticle } from 'src/lib/articleOperations';
import { getPagesManifest } from 'src/lib/pagesManifest';

type Body = { oldSlug: string; newSlug: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  const body = req.body as Body | undefined;
  if (!body || typeof body.oldSlug !== 'string' || typeof body.newSlug !== 'string') {
    return res.status(400).json({ error: 'Body: { oldSlug: string, newSlug: string }' });
  }

  const oldSlug = body.oldSlug.trim();
  const newSlug = body.newSlug.trim();
  if (!oldSlug || !newSlug) {
    return res.status(400).json({ error: 'oldSlug and newSlug required' });
  }
  if (oldSlug === newSlug) {
    return res.status(400).json({ error: 'oldSlug и newSlug должны отличаться' });
  }
  if (!/^[a-z0-9-]+$/.test(newSlug)) {
    return res.status(400).json({ error: 'newSlug: только латиница, цифры, дефисы' });
  }

  try {
    await renameArticle(oldSlug, newSlug);
    const manifest = await getPagesManifest();
    res.status(200).json(manifest);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.includes('not found') || msg.includes('ENOENT')) {
      return res.status(404).json({ error: `Статья "${oldSlug}" не найдена` });
    }
    if (msg.includes('EEXIST') || msg.includes('already exists')) {
      return res.status(409).json({ error: `Статья "${newSlug}" уже существует` });
    }
    console.error('POST /api/pages-manifest/rename:', err);
    res.status(500).json({ error: msg });
  }
}
