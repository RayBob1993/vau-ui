/**
 * @description `getScrollbarWidth` - Функция предназначена для вычисления ширины полосы прокрутки в пикселях. Она создает временный элемент в DOM, чтобы определить ширину области, доступной для контента, как с полосой прокрутки, так и без нее.
 * @returns {number} - Возвращает ширину полосы прокрутки в пикселях. Если функция вызывается на сервере (например, в среде SSR), она возвращает 0.
 *
 * @example
 * const scrollbarWidth = getScrollbarWidth();
 * console.log(Ширина полосы прокрутки: ${scrollbarWidth}px);
 */
export declare function getScrollbarWidth(): number;
