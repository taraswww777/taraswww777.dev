import {FC, PropsWithChildren, ReactNode} from 'react';
import {HeaderComponent as DefaultHeaderComponent} from '../header/header.component';
import {MyContacts} from '../MyContacts';
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
        <div className="col-1 my-3 d-print-none">
          <Menu />
        </div>
        <main className="col-12">
          {children}
        </main>
        <footer
          className="col-12 pt-2"
        >
          <MyContacts />
          <a
            className="btn btn-dark d-block text-uppercase mt-2 d-print-none"
            href="https://spb.hh.ru/resume/4c039332ff03d40aad0039ed1f364961696744"
            target="_blank"
          >
            Резюме на hh.ru
          </a>
        </footer>
      </div>
    </div>
  )
}
