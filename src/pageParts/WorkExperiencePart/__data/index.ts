import {WorkExperienceDto} from 'src/types/dto';
import {sortWorkExperience} from 'src/utils/sortWorkExperience';
import dataWorkExperience from './work-experience.json';
import {ResultSchool_2023_02} from './ResultSchool_2023_02';
import {InnoTech_TRFR_2023_05} from './InnoTech_TRFR_2023_05';
import {Taraswww777_2022_02} from './Taraswww777_2022_01';
import {genTechnologiesTags} from 'src/utils/genTechnologiesTags';
import {Tag} from 'react-tagcloud';


export const workExperienceList: WorkExperienceDto[] = sortWorkExperience([
  ...dataWorkExperience,
  InnoTech_TRFR_2023_05,
  ResultSchool_2023_02,
  Taraswww777_2022_02
]);


export const TECHNOLOGIES_TAGS: Tag[] = genTechnologiesTags(workExperienceList);
