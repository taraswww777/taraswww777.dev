import {getDiffDate} from './getDiffDate';
import {describe, it} from '@jest/globals';
import expect from 'expect';
import {MC_1_Day} from '../constants/dateTime';

describe('getDiffDate', () => {
  it('должна вернуть правильную разницу времени между двумя датами', () => {
    const bDate = new Date(2022, 0, 1); // 1 января 2022 года
    const eDate = new Date(2023, 0, 1); // 1 января 2023 года
    const result = getDiffDate(bDate, eDate);

    expect(result.diffTime).toBe(31536000000); // 1 год в миллисекундах
    expect(result.diffMonth).toBe(12);
    expect(result.y).toBe(1);
    expect(result.m).toBe(0);
    expect(result.d).toBe(0);
  });

  it('должна правильно вычислить разницу между датами в пределах одного месяца', () => {
    const bDate = new Date(2022, 0, 1); // 1 января 2022 года
    const eDate = new Date(2022, 0, 15); // 15 января 2022 года
    const result = getDiffDate(bDate, eDate);

    expect(result.diffTime).toBe(14 * MC_1_Day); // 14 дней в миллисекундах
    expect(result.diffMonth).toBe(0);
    expect(result.y).toBe(0);
    expect(result.m).toBe(0);
    expect(result.d).toBe(14);
  });

  it('должна правильно вычислить разницу между датами в нескольких месяцах', () => {
    const bDate = new Date(2022, 0, 1); // 1 января 2022 года
    const eDate = new Date(2022, 2, 1); // 1 марта 2022 года
    const result = getDiffDate(bDate, eDate);

    expect(result.diffTime).toBe((31 + 28) * MC_1_Day); // 2 месяца в миллисекундах (предполагая средний месяц)
    expect(result.diffMonth).toBe(2);
    expect(result.y).toBe(0);
    expect(result.m).toBe(2);
    expect(result.d).toBe(0);
  });

  it('должна правильно вычислить разницу между датами в нескольких годах и месяцах', () => {
    const bDate = new Date(2020, 0, 1); // 1 января 2020 года
    const eDate = new Date(2023, 2, 1); // 1 марта 2023 года
    const result = getDiffDate(bDate, eDate);

    expect(result.diffTime).toBe(365 * 3 * MC_1_Day + 60 * MC_1_Day); // примерно 3 года и 2 месяца в миллисекундах
    expect(result.diffMonth).toBe(38);
    expect(result.y).toBe(3);
    expect(result.m).toBe(2);
    expect(result.d).toBe(0);
  });

  it('должна правильно вычислить разницу между датами, если начальная дата позже конечной', () => {
    const bDate = new Date(2023, 2, 1); // 1 марта 2023 года
    const eDate = new Date(2020, 0, 1); // 1 января 2020 года
    const result = getDiffDate(bDate, eDate);

    expect(result.diffTime).toBe(-1 * (365 * 3 * MC_1_Day + 60 * MC_1_Day)); // примерно -3 года и -2 месяца в миллисекундах
    expect(result.diffMonth).toBe(-38);
    expect(result.y).toBe(-3);
    expect(result.m).toBe(-2);
    expect(result.d).toBe(0);
  });
});
