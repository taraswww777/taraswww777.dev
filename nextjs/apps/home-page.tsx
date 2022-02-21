import styles from 'styles/Home.module.scss';
import Head from 'next/head';
import {SubTitle, Title, TitleContainer} from 'components/titles';
import {Accordion, Toggle} from 'components/accordion';
import {Button, ButtonLink, ButtonSizes, ButtonTypes} from 'components/buttons';
import {Alert} from 'components/alert';
import {Tabs} from 'components/tabs';
import {SocialLink, SocialLinkViews} from 'components/social-link';
import {Blockquote} from 'components/blockquote';
import {Tooltip} from 'components/tooltip';
import {InformationBlock} from 'components/information-block';
import {MarkedText} from 'components/text';
import React from 'react';

export const AppHomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ковалёв Тарас Викторович</title>
        <meta name="description" content="Сайт Ковалёва Тараса Викторовича" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <TitleContainer>
            <Title>Ковалёв Тарас Викторович</Title>
          </TitleContainer>
        </div>


        <div className={styles.informationBlock}>
          <InformationBlock title={'Что-то обо мне'}>
            <ol>
              <li>
                <MarkedText>Октябрь 2012 — февраль 2013 <sub>5 месяцев</sub></MarkedText>
                <p>
                  Дальневосточный государственный университет
                  Благовещенск (Амурская область), dalgau.ru
                </p>
                <p>
                  Программист,
                  Тех сопровождение учебного процесса ФЗДПО
                </p>
              </li>
              <li>
                <MarkedText>Октябрь 2015 — август 2017 <sub>1 год 11 месяцев</sub></MarkedText>
                <p>
                  ООО Центр сопровождения сайтов
                  Благовещенск (Амурская область), dv-css.ru
                </p>
                <p>
                  Web-программист
                </p>
                <p>
                  <b>Обязанности</b>
                  <ul>
                    <li>Разработка и сопровождение сайтов</li>
                    <li>Верстка (адаптивных) сайтов</li>
                    <li>Программирование сайтов</li>
                    <li>Адаптация плагинов и сайтов под "хотелки"</li>
                    <li>Восстановление сайтов после заражений</li>
                    <li>Базовое администрирование серверов</li>
                    <li>Обеспечение сохранности доступов к сайтам и серверам</li>
                  </ul>
                </p>
              </li>
              <li>
                <MarkedText>Март 2018 — июнь 2018 <sub>4 месяца</sub></MarkedText>
                <p>
                  Текарт, Маркетинговая группа
                  Тула, www.techart.rup
                </p>
                <p>
                  <b>Обязанности</b>
                  <ul>
                    <li>Разработка сайтов</li>
                    <li>Поддержка ранее созданных сайтов</li>
                    <li>Доработка легаси решений</li>
                  </ul>
                </p>
              </li>
              <li>
                <MarkedText>Июнь 2018 — сентябрь 2018 <sub>4 месяца</sub></MarkedText>
                <p>Сайт-Мастер
                  Санкт-Петербург, site-spb.ru/</p>
                <p>
                  <b>Обязанности</b>
                  <ul>
                    <li>Разработка сайтов</li>
                    <li>Поддержка ранее созданных сайтов</li>
                    <li>Доработка легаси решений</li>
                  </ul>
                </p>
              </li>
              <li>
                <MarkedText>Ноябрь 2018 — по настоящее время<sub>Более 3х лет</sub></MarkedText>
                <p>EPAM Systems Inc. (Россия)
                  Рязань, www.epam-group.ru</p>

                <p>
                  Проекты этого предприятия отличаются своей длительностью, обычно более года.
                  По этому про каждый проект поотдельности
                </p>
                <div>
                  <b>Росгострах, FE developer (декабрь 2018 - январь 2020)</b>
                  <p>
                    Разработка части функционала личного кабинета юридических лиц, для обеспечения удобного способа
                    оформления большого количесва страховок.
                  </p>
                  <p>
                    <strong>Состав команды:</strong>
                    <ul>
                      <li>2 - BA</li>
                      <li>3 - FE</li>
                      <li>4 - BE</li>
                      <li>2 - QA</li>
                    </ul>
                  </p>
                  <p>
                    В моей зоне ответственности были:
                    <ul>
                      <li>разработка интерфейсов</li>
                      <li>обучение новых членов команды</li>
                      <li>проведение кодревью колег в команде</li>
                      <li>контроль за git репозиторием</li>
                      <li>замещение лида команды в периоды его отсутствия</li>
                    </ul>
                  </p>
                  <p>
                    <b>Технологии:</b>
                    <ul>
                      <li>knockoutjs</li>
                      <li>scss</li>
                      <li>less</li>
                      <li>git</li>
                      <li>jira</li>
                      <li>teamcity</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <b>ВТБ, FE developer (февраль 2020 - по настоящее время)</b>

                  <p>
                    Проект является весьма большим и насчитыает более 1000 человек
                    (FE/BE разработчики, аналитики, тестировщики, devops инженеры, мененджерры)
                    с нескольких струдничающих предприятий.
                  </p>
                  <p>
                    Стек технологий:
                    <br />
                    Tools: Jira, bitbucket, teamcity, kubernetes<br />
                    Database: PostgreSQL<br />
                    Programming languages: JavaScript(ES5 & ES6), TypeScript<br />
                    Version control systems: Git<br />
                    Network technologies: HTTP, HTTPS<br />
                    Frameworks: ReactJS, Jest<br />
                    Libraries: redux, react-redux, redux-thunk, redux-form, lodash, flow<br />
                    Other: SASS, Babel, WebPack.
                  </p>
                  <p>
                    За 2.5 года мне довелось поработать в 3х разных командах, выполняняя различные задачи.
                    В основном приходилось выполнять:
                    <ul>
                      <li>оценка поступающих задач</li>
                      <li>собеседование новых членов команды</li>
                      <li>переход с js на ts</li>
                      <li>написание unit тестов</li>
                      <li>согласования работ с другими командами</li>
                    </ul>
                  </p>
                  <p><strong>Составы команд</strong></p>
                  <table>
                    <thead>
                    <tr>
                      <th>Команда 1</th>
                      <th>Команда 2</th>
                      <th>Команда 3</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <ul>
                          <li>3 - BA</li>
                          <li>4 - FE Developers</li>
                          <li>8 - BE Developers</li>
                          <li>6 - QA Manual Tester</li>
                          <li>1 - Auto Tester</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>3 - BA</li>
                          <li>2 - FE Developers</li>
                          <li>4 - BE Developers</li>
                          <li>3 - QA Manual Tester</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>1 - BA</li>
                          <li>1 - FE Developers</li>
                          <li>2 - BE Developers</li>
                          <li>1 - QA Manual Tester</li>
                        </ul>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ol>

          </InformationBlock>
        </div>
      </main>

      <footer className={styles.footer}>
        <div><p>@taraswww777</p></div>
        <div><p>
          <ButtonLink
            href="https://ryazan.hh.ru/resume/4c039332ff03d40aad0039ed1f364961696744?customDomain=1"
          >
            Резюме на hh.ru
          </ButtonLink>
        </p></div>
      </footer>
    </div>
  );
}
