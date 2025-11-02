import { isUndefined } from './isUndefined';
import { isObject } from './isObject';
import { isNull } from './isNull';

function isStringKeyObject (value: unknown): value is Record<string, unknown> {
  return !isNull(value) &&
    !isUndefined(value) &&
    isObject(value) &&
    !Array.isArray(value);
}

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
export function getProp<
  T extends Record<string, unknown>,
  R = unknown
> (
  object: T | null | undefined,
  path: string
): R | null {
  if (!object || !path.trim()) {
    return null;
  }

  const _path = path.split('.');
  let current: unknown = object;

  for (const key of _path) {
    if (!isStringKeyObject(current)) {
      return null;
    }

    current = current[key];
  }

  return (current as R) ?? null;
}
