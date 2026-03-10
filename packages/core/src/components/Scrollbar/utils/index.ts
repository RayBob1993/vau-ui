import type { MaybeNull } from '../../../types';

export function getScrollTop (element: MaybeNull<HTMLDivElement>, isVertical: boolean = false): number {
  return isVertical && element ? element.scrollTop : 0;
}

export function getScrollLeft (element: MaybeNull<HTMLDivElement>, isHorizontal: boolean = false): number {
  return isHorizontal && element ? element.scrollLeft : 0;
}

export function getOffsetTop (element: MaybeNull<HTMLDivElement>, isVertical: boolean = false): number {
  return isVertical && element ? element.offsetTop : 0;
}

export function getOffsetLeft (element: MaybeNull<HTMLDivElement>, isHorizontal: boolean = false): number {
  return isHorizontal && element ? element.offsetLeft : 0;
}
