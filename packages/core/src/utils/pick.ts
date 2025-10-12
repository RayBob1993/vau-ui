/**
 * @description `pick` - Функция создает новый объект, который содержит только указанные ключи из исходного объекта. Это полезно для извлечения подмножества свойств объекта.
 * @param {object} object Исходный объект, из которого будут извлекаться свойства.
 * @param {array} keys Массив ключей, которые нужно извлечь из исходного объекта.
 * @returns {object} Новый объект, содержащий только те свойства исходного объекта, ключи которых указаны в массиве keys
 * @example
 *
 * pick({
 *   prop1: 'value1',
 *   prop2: 'value2',
 *   prop3: 'value3',
 *   prop4: 'value4',
 * }, ['prop1', 'prop4']);
 * // => { prop1: 'value1', prop4: 'value4' }
 *
 */
export function pick<O extends Record<string, unknown>, K extends keyof O> (object: O, keys: K[]): Pick<O, K> {
  const result = {} as Pick<O, K>;

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result[key] = object[key];
    }
  }

  return result;
}
