import {WorkExperienceDto} from '../types/dto';

export function findMinMaxDates(workExperienceList: WorkExperienceDto[]): { minDateBegin: Date | null, maxDateEnd: Date | null } {
  if (workExperienceList.length === 0) {
    return {minDateBegin: null, maxDateEnd: null};
  }

  let minDateBegin: Date | null = new Date(workExperienceList[0].dateBegin);
  let maxDateEnd: Date | null = workExperienceList[0].dateEnd ? new Date(workExperienceList[0].dateEnd) : null;

  for (const experience of workExperienceList) {
    const currentBegin = new Date(experience.dateBegin);
    const currentEnd = experience.dateEnd ? new Date(experience.dateEnd) : null;

    if (currentBegin < minDateBegin!) {
      minDateBegin = currentBegin;
    }

    if (currentEnd && (!maxDateEnd || currentEnd > maxDateEnd)) {
      maxDateEnd = currentEnd;
    }
  }

  return {minDateBegin, maxDateEnd};
}
