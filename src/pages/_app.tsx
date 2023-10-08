import type {AppProps} from 'next/app'
import Head from 'next/head'
import {SITE_NAME} from 'src/constants/common';
import 'src/styles/globals.scss'
import {MDXProvider} from '@mdx-js/react';

export default function App({Component, pageProps}: AppProps) {
  return (
    <MDXProvider>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet='utf-8' />
        <link rel="icon" href="/favicon.ico" />
        <meta name="zen-verification" content="z0wd2SS2t0DrS2qFsQEG5fIHme88fCZEm4V3N4nuwewvhhKFLkWCuVjwFYJeFIaG" />
      </Head>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
