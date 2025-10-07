/**
 * @description `isFunction` - Проверка переданного значения на функцию
 * @param {unknown} value - Значение для проверки.
 * @returns {boolean} - Возвращает true, если значение является функцией; иначе false.
 * @example
 * isFunction(3); // => false
 * isFunction({}); // => false
 * isFunction('3'); // => false
 * isFunction(function () {}); // => true
 * isFunction(() => {}); // => true
 * isFunction(class {}); // => true
 * isFunction(null); // => false
 * isFunction(undefined); // => false
 */
export function isFunction (value: unknown): value is (...args: unknown[]) => unknown {
  return Object.prototype.toString.call(value) === '[object Function]';
}
