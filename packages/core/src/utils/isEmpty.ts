import { isString } from './isString';
import { isObject } from './isObject';
import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

/**
 * @description `isEmpty` - Проверка переданного значения на пустоту
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — пустое, иначе — false.
 * @example
 * isEmpty(undefined); // => true
 * isEmpty(null); // => true
 * isEmpty(''); // => true
 * isEmpty([]); // => true
 * isEmpty({}); // => true
 * isEmpty(0); // => false
 * isEmpty(false); // => false
 * isEmpty(new Date()); // => false
 * isEmpty(new Map()); // => true
 * isEmpty(new Set()); // => true
 */
export function isEmpty (value: unknown): boolean {
  // Проверка на примитивные пустые значения
  if (isNull(value) || isUndefined(value)) {
    return true;
  }

  // Проверка строк
  if (isString(value)) {
    return value === '';
  }

  // Проверка массивов
  if (Array.isArray(value)) {
    return !Boolean(value.length);
  }

  // Проверка массивоподобных структур
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  // Проверка объектов
  if (isObject(value)) {
    // Проверка специальных объектов
    if (value instanceof Date) {
      return false; // Date всегда считается непустым
    }

    if (value instanceof RegExp) {
      return false; // RegExp всегда считается непустым
    }

    // Проверка обычных объектов
    return Object.keys(value).length === 0;
  }

  // Все остальные значения (числа, булевы значения, функции и т.д.) считаются непустыми
  return false;
}
