/**
 * @description `isNull` - Проверка переданного значения на null
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — null, иначе — false.
 * @example
 * isNull(undefined); // => true
 * isNull(null); // => true
 * isNull(''); // => false
 * isNull([]); // => false
 * isNull({}); // => false
 */
export function isNull (value: unknown): value is null {
  return value === null;
}
