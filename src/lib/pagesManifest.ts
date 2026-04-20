import path from 'path';
import fs from 'fs/promises';
import type { ArticleManifestEntry, PagesManifest } from './pagesManifestShared';
import { selectPublishedArticlesSorted } from './pagesManifestShared';

export type {
  ArticleStatus,
  ArticleManifestEntry,
  PagesManifest,
} from './pagesManifestShared';

export { selectPublishedArticlesSorted } from './pagesManifestShared';

const MANIFEST_PATH = path.join(process.cwd(), 'content', 'pages-manifest.json');

/**
 * Читает манифест страниц из файла.
 */
export async function getPagesManifest(): Promise<PagesManifest> {
  const raw = await fs.readFile(MANIFEST_PATH, 'utf-8');
  return JSON.parse(raw) as PagesManifest;
}

/**
 * Возвращает только опубликованные статьи, отсортированные по publishedAt (desc).
 */
export async function getPublishedArticles(): Promise<ArticleManifestEntry[]> {
  const manifest = await getPagesManifest();
  return selectPublishedArticlesSorted(manifest);
}

/**
 * Возвращает статью по slug или undefined.
 */
export async function getArticleBySlug(
  slug: string
): Promise<ArticleManifestEntry | undefined> {
  const manifest = await getPagesManifest();
  return manifest.articles[slug];
}

/**
 * Записывает манифест в файл.
 */
export async function writePagesManifest(
  manifest: PagesManifest
): Promise<void> {
  const json = JSON.stringify(manifest, null, 2);
  await fs.writeFile(MANIFEST_PATH, json, 'utf-8');
}
