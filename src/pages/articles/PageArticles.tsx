import {PageTemplates} from '../../components/PageTemplates';
import Head from 'next/head';

export const Articles = () => {
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
          </div>
        </div>
      </div>
    </PageTemplates>
  )
}
