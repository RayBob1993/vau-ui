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
export declare function isEmpty(value: unknown): boolean;
