import {PageTemplates} from '../../components/PageTemplates';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Page from './_page.mdx';
import {MDXProvider} from '@mdx-js/react';

interface RouteParams {
  slug: string
}

const Articles = () => {
  const router = useRouter();
  const {slug} = router.query

  console.log('slug:', slug)
  return (
    <PageTemplates>
      <Head>
        <title>Статьи</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="h2">Статьи</h1>
          </div>
          <div className="col-12">
            <MDXProvider>
              <Page />
            </MDXProvider>
            slug: {slug}
          </div>
        </div>
      </div>
    </PageTemplates>
  )
}

export default Articles;
