/**
 * @description `isNumber` - Проверка переданного значения на число
 * @param {*} value Значение для проверки.
 * @returns {boolean} Возвращает true, если value — число, иначе — false.
 * @example
 *
 * isNumber(3); // => true
 * isNumber(Number.MIN_VALUE); // => true
 * isNumber(Infinity); // => true
 * isNumber(NaN); // => false
 * isNumber('3'); // => false
 * isNumber(new Number(5)); // => true
 */
export declare function isNumber(value: unknown): value is number;
