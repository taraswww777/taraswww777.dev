import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GetStaticPaths, GetStaticProps } from 'next';
import 'src/globals.css';
import 'src/mdxContent.css';
import 'src/highlightjs.css';
import { MDXRemote } from 'next-mdx-remote';
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
    const mdxSource = await compileMdxFile(slug);
    const { getMdxComponents } = await import('src/lib/mdxUtils');
    const element = React.createElement(MDXRemote, {
      ...mdxSource,
      components: getMdxComponents(),
    });
    const html = renderToStaticMarkup(element);
    return {
      props: {
        html,
        article,
      },
    };
  } catch (err) {
    console.error(`Failed to compile MDX for slug ${slug}:`, err);
    return { notFound: true };
  }
};

interface ArticlePageProps {
  html: string;
  article: Awaited<ReturnType<typeof getArticleBySlug>>;
}

export default function ArticlePage({ html, article }: ArticlePageProps) {
  if (!article) return null;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
