import {WorkExperienceDto} from 'src/types/dto';
import {sortWorkExperience} from 'src/utils/sortWorkExperience';
import dataWorkExperience from './work-experience.json';
import {ResultSchool_2023_02} from './ResultSchool_2023_02';


export const workExperienceList: WorkExperienceDto[] = sortWorkExperience([
  ...dataWorkExperience,
  ResultSchool_2023_02
]);
