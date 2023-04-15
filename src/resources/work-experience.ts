import {WorkExperienceDto} from 'src/types/dto';
import {dataWorkExperience} from "../__data";


export const loadWorkExperience = (): WorkExperienceDto[] => (
  dataWorkExperience.sort((a, b) => (
    new Date(b.dateBegin).getTime() - new Date(a.dateBegin).getTime()
  ))
);
