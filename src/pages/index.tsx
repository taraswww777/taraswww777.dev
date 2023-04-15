import {HeaderComponent} from "../components/header/header.component";
import {AboutMeComponent} from "../components/about-me/about-me.component";
import {ContactsComponent} from "../components/contacts/contacts.component";
import {WorkExperience} from "../components/WorkExperience";
import {Text, Grid, Container, NavLink} from '@mantine/core';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Container>
      <Grid>
        <Grid.Col xs={12} p={0} mt='1.5rem'>
          <HeaderComponent />
        </Grid.Col>
        <Grid.Col xs={12} p={0} mt='1.5rem'>
          <AboutMeComponent />
        </Grid.Col>
        <Grid.Col xs={12} mt='1.5rem'>
          <WorkExperience />
        </Grid.Col>
        <Grid.Col xs={12} p={0} mt='1.5rem'>
          <ContactsComponent />

          <NavLink
            variant={'filled'}
            color={'dark'}
            style={{
              textAlign: 'center',
              textTransform: 'uppercase',
              fontSize: '1.25rem'
            }}
            active
            component={Link}
            href="https://ryazan.hh.ru/resume/4c039332ff03d40aad0039ed1f364961696744"
            target="_blank"
            label={'Резюме на Hh.ru'}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
