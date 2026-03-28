import { isObject } from '../isObject';
import { describe, it, expect } from 'vitest';

describe('isObject', () => {
  it('Проверка переданных аргументов', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject('')).toBe(false);
    expect(isObject(true)).toBe(false);
  });
});
