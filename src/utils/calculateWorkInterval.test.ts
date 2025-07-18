import {calculateWorkInterval} from './calculateWorkInterval';
import {describe, it} from '@jest/globals';
import expect from 'expect';

describe('calculateWorkInterval', () => {

  it('должен правильно вычислять строку длительности между двумя датами', () => {
    const startDate = new Date('2025.05.26');
    const endDate = new Date('2025.07.15');

    expect(calculateWorkInterval(startDate, endDate)).toBe('2м');
  });

  it('должен правильно вычислять строку длительности между двумя датами', () => {
    const startDate = new Date('2020-01-01');
    const endDate = new Date('2022-06-01');

    expect(calculateWorkInterval(startDate, endDate)).toBe('2г 5м');
  });

  it('должен правильно вычислять строку длительности, если есть только месяцы', () => {
    const startDate = new Date('2020-01-01');
    const endDate = new Date('2020-06-01');

    expect(calculateWorkInterval(startDate, endDate)).toBe('5м');
  });

  it('должен правильно вычислять строку длительности, если есть только годы', () => {
    const startDate = new Date('2018-01-01');
    const endDate = new Date('2020-01-01');

    expect(calculateWorkInterval(startDate, endDate)).toBe('2г');
  });

  it('должен возвращать пустую строку, если нет разницы между датами', () => {
    const startDate = new Date('2020-01-01');
    const endDate = new Date('2020-01-01');

    expect(calculateWorkInterval(startDate, endDate)).toBe('');
  });
});
