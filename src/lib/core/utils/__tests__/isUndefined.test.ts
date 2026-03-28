import { isUndefined } from '../isUndefined';
import { describe, it, expect } from 'vitest';

describe('isUndefined', () => {
  it('Проверка переданных аргументов', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined('undefined')).toBe(false);
    expect(isUndefined(null)).toBe(false);
  });
});
