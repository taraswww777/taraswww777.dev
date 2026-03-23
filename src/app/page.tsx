import { AboutMe } from '../components/AboutMe';
import { PageTemplate } from '../components/PageTemplate';
import { WorkExperiencePart } from '../pageParts/WorkExperiencePart/WorkExperiencePart';
import { ContentContainer } from '../ui/ContentContainer';
import { MetaHead } from '../components/mdx';
import MdxLayout from './MdxLayout';

export default function HomePage() {
  return (
    <MdxLayout>
      <MetaHead title="Обо мне" ogCanonicalUrl="/" />
      <PageTemplate>
        <ContentContainer>
          <AboutMe />
          <WorkExperiencePart />
        </ContentContainer>
      </PageTemplate>
    </MdxLayout>
  );
}
