import {FC, PropsWithChildren} from 'react';
import {HeaderComponent} from '../header/header.component';
import {AboutMeComponent} from '../about-me/about-me.component';
import {WorkExperienceComponent} from '../work-experience/work-experience.component';
import {ContactsComponent} from '../contacts/contacts.component';

export const PageTemplates: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="container">
      <div className="row">
        <header className="col-12">
          <HeaderComponent />
        </header>
        <main className="col-12">
          {children}
        </main>
        <footer
          className="col-12 pt-2"
        >
          <ContactsComponent />
          <a
            className="btn btn-dark d-block text-uppercase mt-2"
            href="https://spb.hh.ru/resume/4c039332ff03d40aad0039ed1f364961696744"
            target="_blank"
          >
            Резюме на Hh.ru
          </a>
        </footer>
      </div>
    </div>
  )
}
