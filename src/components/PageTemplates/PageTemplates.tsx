import {FC, PropsWithChildren, ReactNode} from 'react';
import {HeaderComponent as DefaultHeaderComponent} from '../header/header.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {Menu} from './components/Menu';

interface PageTemplatesProps {
  header?: ReactNode
}

export const PageTemplates: FC<PropsWithChildren<PageTemplatesProps>> = ({
  header,
  children
}) => {
  return (
    <div className="container">
      <div className="row">
        <header className="col-11 my-3">
          {header || <DefaultHeaderComponent />}
        </header>
        <div className="col-1 my-3">
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
