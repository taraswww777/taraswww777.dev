import {Html, Head, Main, NextScript} from 'next/document'
import {YaMetric} from "../components/metrics/ya";

export default function Document() {
  return (
    <Html>
      <Head>
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
