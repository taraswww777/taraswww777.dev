import path from 'path';
import fs from 'fs/promises';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import MdxLayout from 'src/app/MdxLayout';
import {
  MdxTemplate,
  Question,
  Answer,
  BlockQuote,
  MetaHead,
} from 'src/components/mdx';
import { LINKS } from 'src/constants/links';
import { getPagesManifest } from 'src/lib/pagesManifest';
import type { ArticleManifestEntry } from 'src/lib/pagesManifest';
import { HL, HL_TYPE } from 'src/ui';
import { STATUSES } from 'src/types/statses';
import { Card, ContentContainer } from 'src/ui';
import { CopyAnchor } from 'src/components/CopyAnchor';
import { IconRuble } from 'src/components/icons';
import { PageTemplate } from 'src/components/PageTemplate';
import Image from 'next/image';

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
 * Scope для MDX: компоненты и данные, доступные в контенте (передаётся в serialize).
 */
export function getMdxScope() {
  return {
    MdxLayout,
    MdxTemplate,
    MetaHead,
    PageTemplate,
    Question,
    Answer,
    BlockQuote,
    LINKS,
    STATUSES,
    HL,
    HL_TYPE,
    Card,
    ContentContainer,
    CopyAnchor,
    IconRuble,
    Image,
  };
}

/**
 * Только React-компоненты для пропа components в MDXRemote (без LINKS, STATUSES и т.д.).
 */
export function getMdxComponents() {
  return {
    MdxLayout,
    MdxTemplate,
    MetaHead,
    PageTemplate,
    Question,
    Answer,
    BlockQuote,
    HL,
    Card,
    ContentContainer,
    CopyAnchor,
    IconRuble,
    Image,
  };
}

/**
 * Читает MDX-файл по slug и компилирует его.
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
    ...getMdxScope(),
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
