import {WorkExperienceDto} from 'src/types/dto';
import React, {FC} from "react";
import {workIntervalComponent} from "../../utils";
import {Title, Card, Group, Text, Badge, NavLink} from '@mantine/core';


export const WorkExperienceItem: FC<WorkExperienceDto> = ({
  dateBegin,
  dateEnd,
  companyName,
  workPosition,
  teamName,
  companySite,
  companySiteName,
  description,
  technologiesTags
}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={5}>{companyName}</Title>

      <Badge color="dark" variant="filled">
        {workIntervalComponent({dateBegin, dateEnd})}
      </Badge>
      {workPosition && (<Text fw='bold' fz={'0.9rem'}>{workPosition}</Text>)}
      {teamName && (<Text fw='bold' fz={'0.9rem'}>{teamName}</Text>)}

      <Text mt={'1rem'}>{description}</Text>
      {companySite && (
        <Text mt={'1rem'}>
          <NavLink
            p={0}
            noWrap
            color={'blue'}
            variant={'subtle'}
            active
            component={'a'}
            target="_blank"
            href={companySite}
            label={companySiteName || companySite}
          />
        </Text>
      )}

      <Group mt={'1rem'}>
        {(technologiesTags.length > 0) && (
          <div>
            {technologiesTags.map((tag) => (
              <Badge color="dark" variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </Group>
    </Card>
  );
}
