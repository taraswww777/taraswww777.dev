import {AboutMeComponent} from "../components/about-me/about-me.component";
import {WorkExperienceComponent} from "../components/work-experience/work-experience.component";
import {PageTemplates} from '../components/PageTemplates';


export default function Home() {
  return (
    <PageTemplates>
      <AboutMeComponent />
      <div className="mt-3">
        <WorkExperienceComponent />
      </div>
    </PageTemplates>
  )
}
