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
export interface CancelOptions {
    /**
     * Если установлено в true, то только запланированный вызов будет отменен, а текущий выполнится.
     * @default false
     */
    upcomingOnly?: boolean;
}
export interface ThrottledFunction<T extends Array<unknown>> {
    (...args: T): void;
    cancel: (options?: CancelOptions) => void;
}
/**
 * @description `throttle` - Ограничивает частоту вызова функции, позволяя ей выполняться не чаще, чем один раз в указанный период времени.
 *
 * https://github.com/niksy/throttle-debounce/blob/master/throttle.js
 *
 * @template T - Тип функции, которую нужно ограничить.
 * @param {T} callback - Функция, вызов которой нужно ограничить.
 * @param {number} delay - Период времени в миллисекундах, в течение которого функция может быть вызвана только один раз.
 * @param {ThrottleOptions} [options={}] - Опции для настройки поведения функции throttle.
 * @returns {(...args: Parameters<T>) => void} - Обертка вокруг оригинальной функции, которая ограничивает её вызовы.
 *
 * @example
 * const throttledFn = throttle(() => console.log('Throttled'), 1000);
 * window.addEventListener('resize', throttledFn);
 */
export declare function throttle<T extends Array<unknown>>(callback: (...args: T) => unknown, delay: number, options?: ThrottleOptions): ThrottledFunction<T>;
