import { GetStaticProps } from 'next';
import { MetaHead } from 'src/components/mdx/MetaHead';
import { PageTemplate } from 'src/components/PageTemplate';
import { VerticalNav } from 'src/components/vertical-nav';
import { LINKS } from 'src/constants/links';
import { ContentContainer } from 'src/ui';
import MdxLayout from 'src/app/MdxLayout';
import { getPublishedArticles } from 'src/lib/pagesManifest';

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getPublishedArticles();
  const items = articles.reduce<Record<string, string>>((acc, a) => {
    acc[`/articles/${a.slug}`] = a.title;
    return acc;
  }, {});

  return {
    props: { items },
  };
};

interface ArticlesIndexProps {
  items: Record<string, string>;
}

export default function ArticlesIndexPage({ items }: ArticlesIndexProps) {
  return (
    <MdxLayout>
      <MetaHead
        title={LINKS.articlesIndex.title}
        ogCanonicalUrl={LINKS.articlesIndex.link}
      />
      <PageTemplate>
        <ContentContainer>
          <div className="w-full">
            <VerticalNav items={items} />
          </div>
        </ContentContainer>
      </PageTemplate>
    </MdxLayout>
  );
}
