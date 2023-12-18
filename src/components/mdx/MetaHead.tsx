import Head from 'next/head';
import {SITE_NAME} from 'src/constants/common';
import ogDdefaultImage from 'src/public/assets/og-default-image.png'
import {titleWithSiteName} from 'src/utils/titleWithSiteName';

export interface HeadTitleProps {
  title: string,
  description?: string;
  ogImageUrl?: string;
  ogCanonicalUrl?: string;
  ogType?: string;
}

export const MetaHead = ({
  title,
  description,
  ogImageUrl = ogDdefaultImage.src,
  ogCanonicalUrl,
  ogType = 'website'
}: HeadTitleProps) => {
  return (
    <Head>
      <title>{titleWithSiteName(title)}</title>
      <meta name={'description'} content={description || title} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || title} />
      <meta property="og:type" content={ogType} />
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      {ogCanonicalUrl && (
        <>
          <meta property="og:url" content={ogCanonicalUrl} />
          <link rel="canonical" href={ogCanonicalUrl} />
        </>
      )}

    </Head>
  );
};
