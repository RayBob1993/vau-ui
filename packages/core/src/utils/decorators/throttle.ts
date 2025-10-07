export interface ThrottleOptions {
  /**
   * Если установлено в true, то вызов функции после окончания периода ожидания не будет выполнен.
   * @default false
   */
  noTrailing?: boolean;

  /**
   * Если установлено в true, то первый вызов функции внутри периода ожидания не будет выполнен.
   * @default false
   */
  noLeading?: boolean;

  /**
   * Если установлено в true, то функция будет работать в режиме debounce.
   * @default undefined
   */
  debounceMode?: boolean;
}

interface CancelOptions {
  /**
   * Если установлено в true, то только запланированный вызов будет отменен, а текущий выполнится.
   * @default false
   */
  upcomingOnly?: boolean;
}

/**
 * @description `throttle` - Ограничивает частоту вызова функции, позволяя ей выполняться не чаще, чем один раз в указанный период времени.
 *
 * https://github.com/niksy/throttle-debounce/blob/master/throttle.js
 *
 * @template T - Тип функции, которую нужно ограничить.
 * @param {number} delay - Период времени в миллисекундах, в течение которого функция может быть вызвана только один раз.
 * @param {T} callback - Функция, вызов которой нужно ограничить.
 * @param {ThrottleOptions} [options={}] - Опции для настройки поведения функции throttle.
 * @returns {(...args: Parameters<T>) => void} - Обертка вокруг оригинальной функции, которая ограничивает её вызовы.
 *
 * @example
 * const throttledFn = throttle(1000, () => console.log('Throttled'));
 * window.addEventListener('resize', throttledFn);
 */
export function throttle <T extends (...args: any[]) => any>(delay: number, callback: T, options: ThrottleOptions = {}) {
  const {
    noTrailing = false,
    noLeading = false,
    debounceMode = undefined
  } = options;

  let timeoutID: NodeJS.Timeout | null = null;
  let cancelled = false;

  let lastExec = 0;

  function clearExistingTimeout () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }

  function cancel (options: CancelOptions = {}) {
    const { upcomingOnly = false } = options;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }

  function wrapper (...arguments_: Array<any>) {
    // @ts-ignore
    const self = this;
    const elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    }

    function exec () {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }

    function clear () {
      timeoutID = null;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        lastExec = Date.now();
        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        exec();
      }
    } else if (!noTrailing) {
      timeoutID = setTimeout(
        debounceMode ? clear : exec,
        debounceMode === undefined ? delay - elapsed : delay
      );
    }
  }

  wrapper.cancel = cancel;

  return wrapper;
}
