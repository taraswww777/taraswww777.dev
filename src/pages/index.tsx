import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <header className="col-12">
          <app-header></app-header>
        </header>
        <main className="col-12">
          <app-about-me></app-about-me>
          <div className="mt-3">
            <app-work-experience></app-work-experience>
          </div>
        </main>
        <footer className="col-12 mt-4">
          <app-contacts></app-contacts>
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
