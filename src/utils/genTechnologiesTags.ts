import {WorkExperienceDto} from '../types/dto';
import {Tag} from 'react-tagcloud';
import {map} from 'lodash';

export const genTechnologiesTags = (list: WorkExperienceDto[]): Tag[] => {
  const tags = list.flatMap(item => item.technologiesTags).sort();

  const result: Record<string, number> = {};

  tags.forEach((tag) => {
    if (result[tag]) {
      result[tag]++;
    } else {
      result[tag] = 1;
    }
  });

  const resultTags: Tag[] = map(result, (count, tag) => ({
    value: tag,
    count
  }));

  // @ts-ignore
  return resultTags.sort((a, b) => (a?.count > b?.count));
}
