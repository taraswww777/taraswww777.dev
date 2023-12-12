import {WorkExperienceDto} from 'src/types/dto';
import {sortWorkExperience} from 'src/utils/sortWorkExperience';
import {dataWorkExperience} from 'src/__data';

export const workExperienceList: WorkExperienceDto[] = sortWorkExperience([
  ...dataWorkExperience
]);
