import Head from 'next/head';


interface HeadTitleProps {
  title: string
}

export const HeadTitle = ({title}: HeadTitleProps) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
