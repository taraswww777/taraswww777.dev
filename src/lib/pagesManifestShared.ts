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

/**
 * Опубликованные статьи из манифеста, по дате публикации (новые сверху).
 */
export function selectPublishedArticlesSorted(
  manifest: PagesManifest
): ArticleManifestEntry[] {
  const entries = Object.values(manifest.articles).filter(
    (entry) => entry.status === 'published'
  );
  return entries.sort((a, b) => {
    const dateA = a.publishedAt || '';
    const dateB = b.publishedAt || '';
    return dateB.localeCompare(dateA);
  });
}
