import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {HeaderComponent} from "../components/header/header.component";
import {AboutMeComponent} from "../components/about-me/about-me.component";
import {ContactsComponent} from "../components/contacts/contacts.component";

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
            {/*<app-work-experience></app-work-experience>*/}
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
