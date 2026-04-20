import path from 'path';
import fs from 'fs/promises';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import type { ArticleManifestEntry } from 'src/lib/pagesManifest';
import { getPagesManifest } from 'src/lib/pagesManifest';
import { getMdxDataScope } from './mdxScopeData';

export { getMdxComponents } from './mdxComponentMap';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'articles');

/**
 * Удаляет строки import из MDX-контента (next-mdx-remote не резолвит импорты).
 */
export function stripImportsFromMdx(content: string): string {
  return content
    .split('\n')
    .filter((line) => !/^\s*import\s+.+\s+from\s+['"]/.test(line))
    .join('\n');
}

/**
 * Читает MDX-файл по slug и компилирует его.
 * В scope только сериализуемые данные; компоненты передаются в MDXRemote через getMdxComponents().
 * ARTICLE и ARTICLES — данные из манифеста для ogCanonicalUrl и кросс-ссылок.
 */
export async function compileMdxFile(slug: string, article: ArticleManifestEntry) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, 'utf-8');
  const content = stripImportsFromMdx(raw);

  const manifest = await getPagesManifest();
  const articlesMap: Record<string, { link: string; title: string }> = {};
  for (const [s, e] of Object.entries(manifest.articles)) {
    articlesMap[s] = { link: `/articles/${s}`, title: e.title };
  }

  const scope = {
    ...getMdxDataScope(),
    ARTICLE: { link: `/articles/${slug}`, title: article.title },
    ARTICLES: articlesMap,
  };

  const mdxSource = await serialize(content, {
    scope,
    blockJS: false, // иначе removeJavaScriptExpressions удаляет prop={value}, и pubdate становится undefined
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
      development: process.env.NODE_ENV === 'development',
    },
  });

  return mdxSource;
}
