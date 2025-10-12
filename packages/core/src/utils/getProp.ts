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
export function getProp (object: Record<string, any>, path: string): any {
  if (!object) {
    return null;
  }

  if (!path) {
    return null;
  }

  const _path = path.split('.');

  if (_path.length === 1) {
    return object[_path[0]];
  }

  return getProp(object[_path[0]], _path.slice(1).join('.'));
}
