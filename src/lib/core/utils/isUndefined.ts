/**
 * @description `isUndefined` - Проверка переданного значения на undefined
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — undefined, иначе — false.
 * @example
 *
 * isUndefined(undefined); // => true
 * isUndefined('undefined'); // => false
 */

export function isUndefined (value: unknown): value is undefined {
  return typeof value === 'undefined';
}
