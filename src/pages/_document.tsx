import {Html, Head, Main, NextScript} from 'next/document'
import {YaMetric} from "src/components/metrics/ya";
import {SITE_NAME} from 'src/constants/common';

export default function Document() {
  return (
    <Html lang="ru-RU">
      <Head>
        <meta charSet="utf-8" />
        <title>{SITE_NAME}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="zen-verification" content="z0wd2SS2t0DrS2qFsQEG5fIHme88fCZEm4V3N4nuwewvhhKFLkWCuVjwFYJeFIaG" />
        <script src="https://kit.fontawesome.com/45f9b38c9b.js" crossOrigin="anonymous"></script>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      <YaMetric/>
      </body>
    </Html>
  )
}
