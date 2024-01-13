import {AboutMe} from "../components/AboutMe";
import {WorkExperiencePart} from "../pageParts/WorkExperiencePart/WorkExperiencePart";
import {PageTemplates} from '../components/PageTemplates';
import {MetaHead} from '../components/mdx';
import {titleWithSiteName} from '../utils/titleWithSiteName';
import {LINKS} from '../constants/links';


export default function Home() {
  return (
    <PageTemplates>
      <MetaHead
        title={titleWithSiteName('Обо мне')}
        ogCanonicalUrl={LINKS.home.link}
        keywords={[
          'Ковалёв Тарас Викторович',
          'taraswww777',
          'О taraswww777',
          'О Ковалёв Тарас Викторович',
          'О Ковалёве Тарасе Викторовиче',
          'Факты о taraswww777',
          'Факты о Ковалёв Тарас Викторович',
          'Факты о Ковалёве Тарасе Викторовиче',
          'Ментор по программированию',
          'FE developer Ковалёв Тарас Викторович',
          'FE developer taraswww777',
        ]}
      />
      <AboutMe />
      <div className="mt-3">
        <WorkExperiencePart />
      </div>
    </PageTemplates>
  )
}
