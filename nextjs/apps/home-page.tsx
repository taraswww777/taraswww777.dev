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
          <InformationBlock
            title={'Что-то обо мне'}
            text={`
С 2014 года профессионально работаю программистом. Н
            `}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        @taraswww777
      </footer>
    </div>
  );
}
