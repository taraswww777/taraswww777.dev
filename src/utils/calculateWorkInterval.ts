import {getDiffDate} from './getDiffDate';
import {NON_BREAKING_SPACE} from '../constants/common';

const getYearForm = (years: number): string => {
  if (years % 10 === 1 && years % 100 !== 11) {
    return 'г';
  } else if ((years % 10 >= 2 && years % 10 <= 4) && (years % 100 < 10 || years % 100 >= 20)) {
    return 'г';
  } else {
    return 'л';
  }
};

export const calculateWorkInterval = (bDate: Date, eDate: Date): string => {
  const {y, m, d} = getDiffDate(bDate, eDate);

  const result: string[] = [];

  if (y) {
    result.push(`${y}${getYearForm(y)}`)
  }

  if (m) {
    if (d) {
      result.push(`${m + 1}м`)
    } else {
      result.push(`${m}м`)
    }
  }

  /** Длительность работы */
  return result.join(NON_BREAKING_SPACE)
};
