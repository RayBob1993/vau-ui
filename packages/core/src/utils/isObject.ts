import { isNull } from './isNull';

/**
 * @description `isObject` - Проверка переданного значения на объект
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — объект, иначе — false.
 * @example
 *
 * isObject({});
 * // => true
 *
 * isObject(1);
 * // => false
 *
 * isObject([]);
 * // => false
 */
export function isObject (value: unknown): value is Record<string, unknown> {
  return !isNull(value) &&
    typeof value === 'object' &&
    Object.getPrototypeOf(value) === Object.prototype;
}
