import path from 'path';
import fs from 'fs/promises';

/** Статус страницы в манифесте */
export type ArticleStatus = 'published' | 'unpublished' | 'in_progress' | 'draft';

/** Запись статьи в манифесте */
export interface ArticleManifestEntry {
  slug: string;
  title: string;
  status: ArticleStatus;
  publishedAt: string;
}

/** Манифест страниц — единый источник истины */
export interface PagesManifest {
  articles: Record<string, ArticleManifestEntry>;
}

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
  const entries = Object.values(manifest.articles).filter(
    (entry) => entry.status === 'published'
  );
  return entries.sort((a, b) => {
    const dateA = a.publishedAt || '';
    const dateB = b.publishedAt || '';
    return dateB.localeCompare(dateA);
  });
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
