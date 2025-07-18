import {getDiffDate} from './getDiffDate';

export const calculateWorkInterval = (bDate: Date, eDate: Date): string => {
  const {y, m, d} = getDiffDate(bDate, eDate);

  const result: string[] = [];

  if (y) {
    result.push(`${y}г`)
  }

  if (m) {
    if (d) {
      result.push(`${m + 1}м`)
    } else {
      result.push(`${m}м`)
    }
  }

  /** Длительность работы */
  return result.join(' ')
};
