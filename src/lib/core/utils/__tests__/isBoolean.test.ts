import { isBoolean } from '../isBoolean';
import { describe, it, expect } from 'vitest';

describe('isBoolean', () => {
  describe('Базовые случаи boolean значений', () => {
    it('должна возвращать true для true', () => {
      expect(isBoolean(true)).toBe(true);
    });

    it('должна возвращать true для false', () => {
      expect(isBoolean(false)).toBe(true);
    });

    it('должна работать как type guard для TypeScript', () => {
      const value: unknown = true;

      if (isBoolean(value)) {
        // Здесь TypeScript должен знать, что value - boolean
        expect(typeof value).toBe('boolean');
        expect(value).toBe(true);
      }

      const notBooleanValue: unknown = 'string';

      if (!isBoolean(notBooleanValue)) {
        // Здесь TypeScript должен знать, что notBooleanValue - не boolean
        expect(typeof notBooleanValue).not.toBe('boolean');
      }
    });
  });

  describe('Числовые значения', () => {
    it('должна возвращать false для 0', () => {
      expect(isBoolean(0)).toBe(false);
    });

    it('должна возвращать false для 1', () => {
      expect(isBoolean(1)).toBe(false);
    });

    it('должна возвращать false для отрицательных чисел', () => {
      expect(isBoolean(-1)).toBe(false);
      expect(isBoolean(-100)).toBe(false);
    });

    it('должна возвращать false для дробных чисел', () => {
      expect(isBoolean(3.14)).toBe(false);
      expect(isBoolean(-2.5)).toBe(false);
    });

    it('должна возвращать false для NaN', () => {
      expect(isBoolean(NaN)).toBe(false);
    });

    it('должна возвращать false для Infinity', () => {
      expect(isBoolean(Infinity)).toBe(false);
      expect(isBoolean(-Infinity)).toBe(false);
    });
  });

  describe('Строковые значения', () => {
    it('должна возвращать false для строк "true" и "false"', () => {
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean('false')).toBe(false);
    });

    it('должна возвращать false для пустой строки', () => {
      expect(isBoolean('')).toBe(false);
    });

    it('должна возвращать false для строки "1"', () => {
      expect(isBoolean('1')).toBe(false);
    });

    it('должна возвращать false для строки "0"', () => {
      expect(isBoolean('0')).toBe(false);
    });

    it('должна возвращать false для произвольных строк', () => {
      expect(isBoolean('boolean')).toBe(false);
      expect(isBoolean('yes')).toBe(false);
      expect(isBoolean('no')).toBe(false);
    });
  });

  describe('null и undefined', () => {
    it('должна возвращать false для null', () => {
      expect(isBoolean(null)).toBe(false);
    });

    it('должна возвращать false для undefined', () => {
      expect(isBoolean(undefined)).toBe(false);
    });
  });

  describe('Объекты и массивы', () => {
    it('должна возвращать false для пустого объекта', () => {
      expect(isBoolean({})).toBe(false);
    });

    it('должна возвращать false для объекта со свойствами', () => {
      expect(isBoolean({ a: true })).toBe(false);
      expect(isBoolean({ value: false })).toBe(false);
    });

    it('должна возвращать false для пустого массива', () => {
      expect(isBoolean([])).toBe(false);
    });

    it('должна возвращать false для массива с boolean значениями', () => {
      expect(isBoolean([true])).toBe(false);
      expect(isBoolean([false])).toBe(false);
      expect(isBoolean([true, false])).toBe(false);
    });
  });

  describe('Функции', () => {
    it('должна возвращать false для обычной функции', () => {
      expect(isBoolean(function () { return true; })).toBe(false);
    });

    it('должна возвращать false для стрелочной функции', () => {
      expect(isBoolean(() => false)).toBe(false);
    });

    it('должна возвращать false для конструктора Boolean', () => {
      expect(isBoolean(Boolean)).toBe(false);
    });
  });

  describe('Объекты Boolean', () => {
    it('должна возвращать false для new Boolean(true)', () => {
      expect(isBoolean(new Boolean(true))).toBe(false);
    });

    it('должна возвращать false для new Boolean(false)', () => {
      expect(isBoolean(new Boolean(false))).toBe(false);
    });

    it('должна различать boolean примитив и Boolean объект', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(new Boolean(true))).toBe(false);
    });
  });

  describe('Специальные типы', () => {
    it('должна возвращать false для символов', () => {
      expect(isBoolean(Symbol('test'))).toBe(false);
    });

    it('должна возвращать false для BigInt', () => {
      expect(isBoolean(BigInt(0))).toBe(false);
      expect(isBoolean(BigInt(123))).toBe(false);
    });
  });

  describe('Конструкторы и прототипы', () => {
    it('должна возвращать false для прототипа Boolean', () => {
      expect(isBoolean(Boolean.prototype)).toBe(false);
    });

    it('должна возвращать false для экземпляров других классов', () => {
      class TestClass {}
      expect(isBoolean(new TestClass())).toBe(false);
    });
  });

  describe('Граничные случаи', () => {
    it('должна возвращать false для Date', () => {
      expect(isBoolean(new Date())).toBe(false);
    });

    it('должна возвращать false для регулярных выражений', () => {
      expect(isBoolean(/regex/)).toBe(false);
    });

    it('должна возвращать false для Map и Set', () => {
      expect(isBoolean(new Map())).toBe(false);
      expect(isBoolean(new Set())).toBe(false);
    });

    it('должна возвращать false для промисов', () => {
      expect(isBoolean(Promise.resolve())).toBe(false);
    });

    it('должна возвращать false для undefined переменных', () => {
      let undefinedVar;

      expect(isBoolean(undefinedVar)).toBe(false);
    });
  });

  describe('Примеры из документации', () => {
    it('должна соответствовать примерам из JSDoc', () => {
      expect(isBoolean(3)).toBe(false);
      expect(isBoolean(0)).toBe(false);
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });
  });

  describe('Дополнительные проверки', () => {
    it('должна корректно обрабатывать логические операции', () => {
      const value1 = true && false;
      const value2 = true || false;
      const value3 = !true;
      const value4 = !false;

      expect(isBoolean(value1)).toBe(true); // false
      expect(isBoolean(value2)).toBe(true); // true
      expect(isBoolean(value3)).toBe(true); // false
      expect(isBoolean(value4)).toBe(true); // true
    });

    it('должна работать с тернарным оператором', () => {
      const value1 = true ? 'yes' : 'no';
      const value2 = false ? 1 : 0;
      const value3 = true ? true : false;

      expect(isBoolean(value1)).toBe(false); // string
      expect(isBoolean(value2)).toBe(false); // number
      expect(isBoolean(value3)).toBe(true);  // boolean
    });
  });
});
