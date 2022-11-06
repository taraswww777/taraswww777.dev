import {HeaderComponent} from "../components/header/header.component";
import {AboutMeComponent} from "../components/about-me/about-me.component";
import {ContactsComponent} from "../components/contacts/contacts.component";
import {WorkExperienceComponent} from "../components/work-experience/work-experience.component";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <header className="col-12">
          <HeaderComponent/>
        </header>
        <main className="col-12">
          <AboutMeComponent/>
          <div className="mt-3">
            <WorkExperienceComponent/>
          </div>
        </main>
        <footer className="col-12 mt-4">
          <ContactsComponent/>
          <a
            className="btn btn-dark d-block text-uppercase mt-4"
            href="https://ryazan.hh.ru/resume/4c039332ff03d40aad0039ed1f364961696744"
            target="_blank"
          >
            Резюме на Hh.ru
          </a>
        </footer>
      </div>
    </div>
  )
}
