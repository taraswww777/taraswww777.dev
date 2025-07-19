import {WorkExperienceDto} from 'src/types/dto';
import {sortWorkExperience} from 'src/utils/sortWorkExperience';
import dataWorkExperience from './archive/work-experience.json';
import {ResultSchool_2023_02} from './ResultSchool_2023_02';
import {InnoTech_TRFR_2023_05} from './archive/InnoTech_TRFR_2023_05';
import {Taraswww777_2022_02} from './Taraswww777_2022_01';
import {genTechnologiesTags} from 'src/utils/genTechnologiesTags';
import {Tag} from 'react-tagcloud';
import {InnoTech_TRFR_2025_05} from './archive/InnoTech_SUBS_2025_05';
import {InnoTech_OPS_2025_07} from './InnoTech_OPS_2025_07';


export const workExperienceList: WorkExperienceDto[] = sortWorkExperience([
  ...dataWorkExperience,
  InnoTech_TRFR_2023_05,
  InnoTech_TRFR_2025_05,
  ResultSchool_2023_02,
  InnoTech_OPS_2025_07,
  Taraswww777_2022_02
]);


export const TECHNOLOGIES_TAGS: Tag[] = genTechnologiesTags(workExperienceList);
