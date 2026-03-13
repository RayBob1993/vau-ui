/**
 * @description `getProp` - Получить значение свойства по указанному пути
 * @param {object} object Изначальный объект.
 * @param {string} path путь до нужного свойства.
 * @returns {*} Возвращает значение свойства по указанному пути
 * @example
 * getProp({
 *   prop1: 'value1',
 *   prop2: 'value2',
 *   prop3: {
 *     prop1: 'value1',
 *     prop2: 'value2',
 *     prop3: {
 *       prop1: 'value1',
 *       prop2: 'value2',
 *     },
 *   },
 * }, 'prop3.prop3.prop2');
 * // => 'value2'
 *
 */
export declare function getProp<T extends Record<string, unknown>, R = unknown>(object: T | null | undefined, path: string): R | null;
