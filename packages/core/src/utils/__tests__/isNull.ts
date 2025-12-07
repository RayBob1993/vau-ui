import { isNull } from '../isNull';
import { describe, it, expect } from 'vitest';

describe('isNull', () => {
  describe('Базовые случаи', () => {
    it('должна возвращать true для null', () => {
      expect(isNull(null)).toBe(true);
    });

    it('должна возвращать false для undefined', () => {
      expect(isNull(undefined)).toBe(false);
    });

    it('должна возвращать false для пустой строки', () => {
      expect(isNull('')).toBe(false);
      expect(isNull('null')).toBe(false);
    });

    it('должна возвращать false для чисел', () => {
      expect(isNull(0)).toBe(false);
      expect(isNull(1)).toBe(false);
      expect(isNull(-1)).toBe(false);
      expect(isNull(NaN)).toBe(false);
      expect(isNull(Infinity)).toBe(false);
    });

    it('должна возвращать false для булевых значений', () => {
      expect(isNull(true)).toBe(false);
      expect(isNull(false)).toBe(false);
    });

    it('должна возвращать false для массивов', () => {
      expect(isNull([])).toBe(false);
      expect(isNull([1, 2, 3])).toBe(false);
      expect(isNull([null])).toBe(false); // null внутри массива, но не сам массив
    });

    it('должна возвращать false для объектов', () => {
      expect(isNull({})).toBe(false);
      expect(isNull({ a: 1 })).toBe(false);
      expect(isNull({ null: null })).toBe(false); // null как значение свойства
    });

    it('должна возвращать false для функций', () => {
      expect(isNull(() => {})).toBe(false);
      expect(isNull(function () {})).toBe(false);
    });
  });

  describe('Специальные случаи', () => {
    it('должна возвращать false для символов', () => {
      expect(isNull(Symbol('test'))).toBe(false);
      expect(isNull(Symbol())).toBe(false);
    });

    it('должна возвращать false для BigInt', () => {
      expect(isNull(BigInt(0))).toBe(false);
      expect(isNull(BigInt(123))).toBe(false);
    });

    it('должна корректно работать с типами TypeScript', () => {
      // Проверка type guard
      const value: unknown = null;

      if (isNull(value)) {
        // Здесь TypeScript должен знать, что value - null
        expect(value).toBe(null);
      }

      const notNullValue: unknown = 'not null';

      if (!isNull(notNullValue)) {
        // Здесь TypeScript должен знать, что notNullValue - не null
        expect(notNullValue).not.toBe(null);
      }
    });
  });

  describe('Edge cases (граничные случаи)', () => {
    it('должна возвращать false для экземпляров Date', () => {
      expect(isNull(new Date())).toBe(false);
    });

    it('должна возвращать false для регулярных выражений', () => {
      expect(isNull(/regex/)).toBe(false);
      expect(isNull(new RegExp('test'))).toBe(false);
    });

    it('должна возвращать false для Map и Set', () => {
      expect(isNull(new Map())).toBe(false);
      expect(isNull(new Set())).toBe(false);
    });

    it('должна возвращать false для промисов', () => {
      expect(isNull(Promise.resolve())).toBe(false);
    });

    it('должна возвращать false для экземпляров классов', () => {
      class TestClass {}
      expect(isNull(new TestClass())).toBe(false);
    });

    it('должна возвращать false для прототипов', () => {
      expect(isNull(Object.prototype)).toBe(false);
    });
  });

  describe('Конкретные примеры из JSDoc', () => {
    it('должна соответствовать примерам из документации', () => {
      // Поправил пример: undefined должно быть false
      expect(isNull(undefined)).toBe(false);
      expect(isNull(null)).toBe(true);
      expect(isNull('')).toBe(false);
      expect(isNull([])).toBe(false);
      expect(isNull({})).toBe(false);
    });
  });
});
