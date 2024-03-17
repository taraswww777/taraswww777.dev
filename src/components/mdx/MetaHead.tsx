import Head from 'next/head';
import { SITE_NAME, SITE_URL } from 'src/constants/common';
import { titleWithSiteName } from 'src/utils/titleWithSiteName';
import { ReactNode } from 'react';
import { toString } from 'lodash';

export interface HeadTitleProps {
  title: ReactNode,
  metaTitle?: string,
  description?: string;
  keywords?: string[];
  ogImageUrl?: string;
  ogCanonicalUrl?: string;
  ogType?: string;
}

export const MetaHead = ({
  title,
  metaTitle,
  description,
  ogImageUrl = '/assets/og-default-image.png',
  keywords,
  ogCanonicalUrl,
  ogType = 'website'
}: HeadTitleProps) => {
  const preparedMetaTitle = metaTitle || toString(title)

  return (
    <Head>
      <title>{titleWithSiteName(metaTitle)}</title>
      <meta name={'description'} content={description || preparedMetaTitle} />
      {keywords && <meta name={'keywords'} content={keywords.join(', ')} />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={preparedMetaTitle} />
      <meta property="og:description" content={description || preparedMetaTitle} />
      <meta property="og:type" content={ogType} />
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      {ogCanonicalUrl && (
        <>
          <meta property="og:url" content={`${SITE_URL}${ogCanonicalUrl}`} />
          <link rel="canonical" href={`${SITE_URL}${ogCanonicalUrl}`} />
        </>
      )}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

      <script type="text/javascript">hljs.highlightAll();</script>
    </Head>
  );
};
