import { InferGetStaticPropsType } from 'next';
import NextMarkdown from 'next-markdown';
import Head from 'next/head';
import path from 'path';

type MyFrontMatter = { title: string };

const nextmd = NextMarkdown<MyFrontMatter>({
  pathToContent: path.resolve('./pages-markdown'),
});

export const getStaticProps = nextmd.getStaticProps;
export const getStaticPaths = nextmd.getStaticPaths;

export default function MyMarkdownPage(props: any) {
  const { html, frontMatter } = props;

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
    </>
  );
}
