import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { getMdxComponents } from 'src/lib/mdxComponentMap';
import { getPublishedArticles, getArticleBySlug } from 'src/lib/pagesManifest';
import { compileMdxFile } from 'src/lib/mdxUtils';

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getPublishedArticles();
  const paths = articles.map((a) => ({
    params: { slug: a.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  if (!slug) return { notFound: true };

  const article = await getArticleBySlug(slug);
  if (!article || article.status !== 'published') {
    return { notFound: true };
  }

  try {
    const mdxSource = await compileMdxFile(slug, article);
    return {
      props: {
        mdxSource,
        article,
      },
    };
  } catch (err) {
    console.error(`Failed to compile MDX for slug ${slug}:`, err);
    return { notFound: true };
  }
};

interface ArticlePageProps {
  mdxSource: Awaited<ReturnType<typeof compileMdxFile>>;
  article: NonNullable<Awaited<ReturnType<typeof getArticleBySlug>>>;
}

export default function ArticlePage({ mdxSource, article }: ArticlePageProps) {
  if (!article) return null;
  const components = getMdxComponents();
  /** Скомпилированный MDX ожидает идентификаторы компонентов в scope при eval, не только в MDXProvider. */
  const scope = { ...components, ...mdxSource.scope };
  return (
    <MDXRemote
      compiledSource={mdxSource.compiledSource}
      frontmatter={mdxSource.frontmatter}
      scope={scope}
      components={components}
    />
  );
}
