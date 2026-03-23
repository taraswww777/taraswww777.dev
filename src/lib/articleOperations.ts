import path from 'path';
import fs from 'fs/promises';
import {
  getPagesManifest,
  writePagesManifest,
  type ArticleManifestEntry,
} from './pagesManifest';

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');
const LINKS_PATH = path.join(process.cwd(), 'src', 'constants', 'links.ts');

const MDX_TEMPLATE = `import MdxLayout from 'src/app/MdxLayout';
import { MdxTemplate } from 'src/components/mdx';

<MdxLayout>
  <MdxTemplate
    pubdate={'{pubdate}'}
    title={'{title}'}
  >
# {title}

Здесь будет контент...
  </MdxTemplate>
</MdxLayout>
`;

/**
 * Создаёт новую статью: MDX-файл + запись в манифесте.
 */
export async function createArticle(slug: string, title: string): Promise<void> {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  const exists = await fs.access(filePath).then(() => true).catch(() => false);
  if (exists) {
    throw new Error(`Article "${slug}" already exists`);
  }

  const pubdate = slug.match(/^\d{4}-\d{2}-\d{2}/)?.[0] || '';
  const safeTitle = title.replace(/'/g, "\\'");
  const content = MDX_TEMPLATE
    .replace(/{slug}/g, slug)
    .replace(/{title}/g, safeTitle)
    .replace(/{pubdate}/g, pubdate);

  await fs.writeFile(filePath, content, 'utf-8');

  const manifest = await getPagesManifest();
  manifest.articles[slug] = {
    slug,
    title,
    status: 'draft',
    publishedAt: pubdate || '',
  };
  await writePagesManifest(manifest);
}

/**
 * Переименовывает статью: файл, манифест, ссылки в links.ts и MDX.
 */
export async function renameArticle(
  oldSlug: string,
  newSlug: string
): Promise<void> {
  const oldPath = path.join(ARTICLES_DIR, `${oldSlug}.mdx`);
  const newPath = path.join(ARTICLES_DIR, `${newSlug}.mdx`);

  await fs.rename(oldPath, newPath);

  const manifest = await getPagesManifest();
  const entry = manifest.articles[oldSlug];
  if (!entry) throw new Error(`Article "${oldSlug}" not found in manifest`);

  delete manifest.articles[oldSlug];
  manifest.articles[newSlug] = { ...entry, slug: newSlug };
  await writePagesManifest(manifest);

  const oldUrl = `/articles/${oldSlug}`;
  const newUrl = `/articles/${newSlug}`;

  // Обновить links.ts
  const linksContent = await fs.readFile(LINKS_PATH, 'utf-8');
  const updatedLinks = linksContent.replace(
    new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
    newUrl
  );
  await fs.writeFile(LINKS_PATH, updatedLinks, 'utf-8');

  // Обновить ссылки во всех MDX
  const files = await fs.readdir(ARTICLES_DIR);
  for (const file of files) {
    if (!file.endsWith('.mdx')) continue;
    const filePath = path.join(ARTICLES_DIR, file);
    let content = await fs.readFile(filePath, 'utf-8');
    if (content.includes(oldUrl)) {
      content = content.replace(new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newUrl);
      await fs.writeFile(filePath, content, 'utf-8');
    }
  }
}
