/**
 * @description `omit` - Функция создает новый объект, который содержит все свойства исходного объекта, за исключением указанных ключей. Это полезно для исключения ненужных свойств из объекта.
 * @param {object} object Исходный объект, из которого будут исключаться свойства.
 * @param {array} keys Массив ключей, которые нужно исключить из исходного объекта.
 * @returns {object} Новый объект, содержащий все свойства исходного объекта, кроме тех, ключи которых указаны в массиве keys
 * @example
 *
 * omit({
 *   prop1: 'value1',
 *   prop2: 'value2',
 *   prop3: 'value3',
 *   prop4: 'value4',
 * }, ['prop1', 'prop4']);
 * // => { prop2: 'value2', prop3: 'value3' }
 *
 */
export function omit<O extends Record<string, unknown>, K extends keyof O> (object: O, keys: Array<K>): Omit<O, K> {
  const result = { ...object } as Exclude<O, K>;

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      delete result[key];
    }
  }

  return result;
}
