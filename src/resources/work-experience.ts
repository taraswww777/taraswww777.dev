import dataWorkExperience from './__data/work-experience.json';
import {WorkExperienceDto} from 'src/types/dto';


export const loadWorkExperience = async (): Promise<WorkExperienceDto[]> => (
  dataWorkExperience.sort((a, b) => (
    new Date(b.dateBegin).getTime() - new Date(a.dateBegin).getTime()
  ))
);
