import {FC, PropsWithChildren} from 'react';
import {HeaderComponent} from '../header/header.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {Menu} from './components/Menu';

export const PageTemplates: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="container">
      <div className="row">
        <header className="col-11">
          <HeaderComponent />
        </header>
        <div className="col-1">
          <Menu />
        </div>
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
