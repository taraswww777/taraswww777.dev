import {MC_1_Day} from '../constants/dateTime';

/** Интерфейс, описывающий разницу между двумя датами */
interface DiffDate {
  diffTime: number;
  diffMonth: number;
  y: number;
  m: number;
  d: number;
}

/**
 * Вычисляет разницу между двумя датами в миллисекундах, месяцах, годах и месяцах без учета лет.
 *
 * @param {Date} bDate - Начальная дата.
 * @param {Date} eDate - Конечная дата.
 * @returns {DiffDate}
 */
export const getDiffDate = (bDate: Date, eDate: Date): DiffDate => {
  // Определяем какая дата раньше для корректного расчета
  const [startDate, endDate] = bDate < eDate ? [bDate, eDate] : [eDate, bDate];
  const isNegative = bDate > eDate;

  const diffTime = eDate.getTime() - bDate.getTime();

  // Корректный расчет месяцев с учетом разной длины месяцев
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  // Корректировка если конечный день месяца меньше начального
  if (days < 0) {
    const lastDayOfMonth = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      0
    ).getDate();
    days += lastDayOfMonth;
    months--;
  }

  // Корректировка месяцев
  if (months < 0) {
    months += 12;
    years--;
  }

  // Общее количество месяцев с учетом лет
  const totalMonths = years * 12 + months;

  // Применяем знак в зависимости от порядка дат
  return {
    diffTime,
    diffMonth: isNegative ? -totalMonths : totalMonths,
    y: isNegative ? -years : years,
    m: isNegative ? -months : months,
    d: isNegative ? ((days * -1) + 0) : days,
  };
};
