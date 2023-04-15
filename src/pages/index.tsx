import {HeaderComponent} from "../components/header/header.component";
import {AboutMeComponent} from "../components/about-me/about-me.component";
import {ContactsComponent} from "../components/contacts/contacts.component";
import {WorkExperienceComponent} from "../components/work-experience/work-experience.component";
import {Grid, Container} from '@mantine/core';

export default function Home() {
  return (
    <Container>
      <Grid>
        <Grid.Col xs={12} p={0}>
          <HeaderComponent />
        </Grid.Col>
        <Grid.Col xs={12} p={0}>
          <AboutMeComponent />
        </Grid.Col>
        <Grid.Col xs={12} mt='1.5rem'>
          <WorkExperienceComponent />
        </Grid.Col>
        <Grid.Col xs={12} p={0} mt='1.5rem'>
          <>
            <ContactsComponent />
            <a
              className="btn btn-dark d-block text-uppercase mt-4"
              href="https://ryazan.hh.ru/resume/4c039332ff03d40aad0039ed1f364961696744"
              target="_blank"
            >
              Резюме на Hh.ru
            </a>
          </>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
