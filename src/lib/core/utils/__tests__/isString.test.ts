import { isString } from '../isString';
import { describe, it, expect } from 'vitest';

describe('isString', () => {
  it('Проверка переданных аргументов', () => {
    expect(isString('')).toBe(true);
    expect(isString('Привет, мир!')).toBe(true);
    expect(isString('1')).toBe(true);
    expect(isString('{}')).toBe(true);
    expect(isString(1)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(true)).toBe(false);
  });
});
