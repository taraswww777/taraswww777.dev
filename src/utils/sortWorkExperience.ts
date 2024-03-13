import {WorkExperienceDto} from '../types/dto';

export function sortWorkExperience(list: WorkExperienceDto[]): WorkExperienceDto[] {
  return list.sort((a, b) => {
    if (a.dateEnd && b.dateEnd) {
      return (
        new Date(b.dateBegin).getTime() - new Date(a.dateBegin).getTime()
      );
    }

    if (a.dateEnd) {
      return 1;
    }
    if (b.dateEnd) {
      return -1;
    }

    return 0;
  })
}
