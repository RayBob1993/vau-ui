import { type IPluralWords, usePlural } from '../usePlural';
import { describe, it, expect } from 'vitest';

describe('usePlural', () => {
  const words: IPluralWords = ['яблоко', 'яблока', 'яблок'];
  const pluralizer = usePlural(words);

  it('Должен вернуть форму единственного числа для 1', () => {
    expect(pluralizer.plural(1)).toBe('яблоко');
  });

  it('Следует вернуть форму для нескольких (2-4)', () => {
    expect(pluralizer.plural(2)).toBe('яблока');
    expect(pluralizer.plural(3)).toBe('яблока');
    expect(pluralizer.plural(4)).toBe('яблока');
  });

  it('Следует возвращать форму множественного числа для many (0, 5-20)', () => {
    expect(pluralizer.plural(0)).toBe('яблок');
    expect(pluralizer.plural(5)).toBe('яблок');
    expect(pluralizer.plural(10)).toBe('яблок');
    expect(pluralizer.plural(20)).toBe('яблок');
  });

  it('Следует возвращать форму множественного числа для чисел, заканчивающихся на 11, 12, 13 и 14', () => {
    expect(pluralizer.plural(11)).toBe('яблок');
    expect(pluralizer.plural(12)).toBe('яблок');
    expect(pluralizer.plural(13)).toBe('яблок');
    expect(pluralizer.plural(14)).toBe('яблок');
  });

  it('Должен возвращать undefined для нечислового ввода', () => {
    // Проверяем, что функция возвращает undefined для NaN
    expect(pluralizer.plural(NaN)).toBeUndefined();
    // Проверяем, что функция возвращает undefined для отрицательных чисел
    expect(pluralizer.plural(-1)).toBeUndefined();
  });
});
