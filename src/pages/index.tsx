import {AboutMeComponent} from "../components/about-me/about-me.component";
import {WorkExperiencePart} from "../pageParts/WorkExperiencePart/WorkExperiencePart";
import {PageTemplates} from '../components/PageTemplates';


export default function Home() {
  return (
    <PageTemplates>
      <AboutMeComponent />
      <div className="mt-3">
        <WorkExperiencePart />
      </div>
    </PageTemplates>
  )
}
