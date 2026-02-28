import { throttle, type ThrottledFunction } from './throttle';

export interface DebounceOptions {
  /**
   * Если установлено в true, то функция будет вызвана сразу же при первом вызове.
   * @default false
   */
  atBegin?: boolean;
}

/**
 * @description `debounce` - Ограничивает вызов функции так, чтобы она выполнялась только один раз после завершения серии быстрых вызовов.
 *
 * https://github.com/niksy/throttle-debounce/blob/master/debounce.js
 *
 * @template T - Тип функции, которую нужно ограничить.
 * @param {number} delay - Период времени в миллисекундах, в течение которого функция не будет вызвана снова.
 * @param {T} callback - Функция, вызов которой нужно ограничить.
 * @param {DebounceOptions} [options={}] - Опции для настройки поведения функции debounce.
 * @returns {(...args: Parameters<T>) => void} - Обертка вокруг оригинальной функции, которая ограничивает её вызовы.
 *
 * @example
 * const debouncedFn = debounce(() => console.log('Debounced'), 300);
 * window.addEventListener('resize', debouncedFn);
 */
export function debounce <T extends Array<unknown>> (
  callback: (...args: T) => unknown,
  delay: number,
  options: DebounceOptions = {}
): ThrottledFunction<T> {
  const { atBegin = false } = options;

  return throttle(callback, delay,{
    debounceMode: atBegin
  });
}
