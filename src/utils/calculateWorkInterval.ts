import { getDiffDate } from './getDiffDate';

export const calculateWorkInterval = (bDate: Date, eDate: Date): string => {
  const { y, m } = getDiffDate(bDate, eDate);

  /** Длительность работы */
  return `${y ? y + 'г ' : ''}${m ? m + 'м ' : ''}`.trim();
};
