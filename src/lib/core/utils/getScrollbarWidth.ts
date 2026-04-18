/**
 * @description `getScrollbarWidth` - Функция предназначена для вычисления ширины полосы прокрутки в пикселях. Она создает временный элемент в DOM, чтобы определить ширину области, доступной для контента, как с полосой прокрутки, так и без нее.
 * @returns {number} - Возвращает ширину полосы прокрутки в пикселях. Если функция вызывается на сервере (например, в среде SSR), она возвращает 0.
 *
 * @example
 * const scrollbarWidth = getScrollbarWidth();
 * console.log(Ширина полосы прокрутки: ${scrollbarWidth}px);
 */
export function getScrollbarWidth (): number {
  if (!window) {
    return 0;
  }

  const outer = document.createElement('div');

  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.append(outer);

  const widthNoScroll = outer.offsetWidth;

  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');

  inner.style.width = '100%';

  outer.append(inner);

  const widthWithScroll = inner.offsetWidth;

  outer.remove();

  return widthNoScroll - widthWithScroll;
}
