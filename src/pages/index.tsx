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
      />
      <AboutMe />
      <div className="mt-3">
        <WorkExperiencePart />
      </div>
    </PageTemplates>
  )
}
