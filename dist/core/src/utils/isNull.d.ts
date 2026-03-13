/**
 * @description `isNull` - Проверка переданного значения на null
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — null, иначе — false.
 * @example
 * isNull(null); // => true
 * isNull(undefined); // => false
 * isNull(''); // => false
 * isNull([]); // => false
 * isNull({}); // => false
 */
export declare function isNull(value: unknown): value is null;
