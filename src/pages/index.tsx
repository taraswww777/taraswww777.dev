import {AboutMe} from "../components/AboutMe";
import {WorkExperiencePart} from "../pageParts/WorkExperiencePart/WorkExperiencePart";
import {PageTemplates} from '../components/PageTemplates';


export default function Home() {
  return (
    <PageTemplates>
      <AboutMe />
      <div className="mt-3">
        <WorkExperiencePart />
      </div>
    </PageTemplates>
  )
}
