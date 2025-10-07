/**
 * @description `isString` - Проверка переданного значения на строку
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — строка, иначе — false.
 * @example
 *
 * isString(3);
 * // => false
 *
 * isString('3');
 * // => true
 */
export function isString (value: unknown): value is string {
  return Object.prototype.toString.call(value) === '[object String]';
}
