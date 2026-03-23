import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getPagesManifest,
  writePagesManifest,
  type ArticleManifestEntry,
  type PagesManifest,
} from 'src/lib/pagesManifest';

type PatchSingleBody = {
  slug: string;
  updates: Partial<ArticleManifestEntry>;
};

type PatchFullBody = {
  updates: PagesManifest;
};

type PatchBody = PatchSingleBody | PatchFullBody;

function isPatchFull(body: PatchBody): body is PatchFullBody {
  return 'updates' in body && typeof (body as PatchFullBody).updates?.articles === 'object';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const manifest = await getPagesManifest();
      res.status(200).json(manifest);
    } catch (err) {
      console.error('GET /api/pages-manifest:', err);
      res.status(500).json({ error: 'Failed to read manifest' });
    }
    return;
  }

  if (req.method === 'PATCH') {
    const body = req.body as PatchBody | undefined;
    if (!body || typeof body !== 'object') {
      res.status(400).json({ error: 'Invalid body' });
      return;
    }

    try {
      const manifest = await getPagesManifest();

      if (isPatchFull(body)) {
        manifest.articles = body.updates.articles;
      } else if ('slug' in body && typeof body.slug === 'string' && body.updates) {
        const entry = manifest.articles[body.slug];
        if (entry) {
          manifest.articles[body.slug] = { ...entry, ...body.updates };
        } else {
          res.status(404).json({ error: `Article "${body.slug}" not found` });
          return;
        }
      } else {
        res.status(400).json({ error: 'Invalid PATCH body: expected { slug, updates } or { updates: PagesManifest }' });
        return;
      }

      await writePagesManifest(manifest);
      res.status(200).json(manifest);
    } catch (err) {
      console.error('PATCH /api/pages-manifest:', err);
      res.status(500).json({ error: 'Failed to write manifest' });
    }
    return;
  }

  res.setHeader('Allow', ['GET', 'PATCH']);
  res.status(405).json({ error: `Method ${req.method} not allowed` });
}
