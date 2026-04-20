import pagesManifestJson from '../../content/pages-manifest.json';
import {
  selectPublishedArticlesSorted,
  type ArticleManifestEntry,
  type PagesManifest,
} from './pagesManifestShared';

/** Список опубликованных статей для клиентских компонентов (данные из манифеста на момент сборки). */
export const publishedArticlesNav: ArticleManifestEntry[] =
  selectPublishedArticlesSorted(pagesManifestJson as PagesManifest);
