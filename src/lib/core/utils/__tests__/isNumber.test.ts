import { isNumber } from '../isNumber';
import { describe, it, expect } from 'vitest';

describe('isNumber', () => {
  it('Проверка переданных аргументов', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(1.1)).toBe(true);
    expect(isNumber(.1)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(Number.MIN_VALUE)).toBe(true);
    expect(isNumber('1')).toBe(false);
    expect(isNumber('')).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(true)).toBe(false);
  });
});
