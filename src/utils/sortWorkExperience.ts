import {WorkExperienceDto} from '../types/dto';

export function sortWorkExperience(list: WorkExperienceDto[]): WorkExperienceDto[] {
  return list.sort((a, b) => (
    new Date(b.dateBegin).getTime() - new Date(a.dateBegin).getTime()
  ))
}
