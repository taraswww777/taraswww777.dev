import Document, {Html, Head, Main, NextScript} from 'next/document'
import {YaMetric} from "../components/metrics/ya";
import {createGetInitialProps} from '@mantine/next';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <script src="https://kit.fontawesome.com/45f9b38c9b.js" crossOrigin="anonymous"></script>
        </Head>
        <body>
        <Main />
        <NextScript />
        <YaMetric />
        </body>
      </Html>
    );
  }
}
