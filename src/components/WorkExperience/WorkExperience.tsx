import {loadWorkExperience} from 'src/resources/work-experience';
import {WorkExperienceDto} from 'src/types/dto';
import React, {useEffect, useState} from "react";
import {Grid, Title} from '@mantine/core';
import {WorkExperienceItem} from './WorkExperience.item';


export const WorkExperience = () => {
  const [workExperience, setWorkExperience] = useState<WorkExperienceDto[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setWorkExperience(loadWorkExperience());

    workExperience.forEach(({technologiesTags}) => {
      setTags([...tags, ...technologiesTags]);
    });
  });

  return (
    <Grid>
      <Grid.Col xs={12} p={0}>
        <Title order={2}>Опыт работы</Title>
      </Grid.Col>
      {workExperience.map((item) => (
        <Grid.Col xs={12} xl={3} lg={4} sm={2} md={4} p={0}>
          <WorkExperienceItem {...item} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
