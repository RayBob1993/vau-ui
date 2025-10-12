import type { TemplateRef } from 'vue';

/**
 * Интерфейс свойств компонента VScrollbar
 * @interface IVScrollbarProps
 */
export interface IVScrollbarProps {
  vertical?: boolean;
  horizontal?: boolean;
  draggableMultiplier?: number;
  infiniteScrollOffset?: number;
  draggable?: boolean;
  hidden?: boolean;
}

/**
 * Интерфейс событий компонента VScrollbar
 * @interface IVScrollbarEmits
 */
export interface IVScrollbarEmits {
  (event: 'scrollEndY'): void;
  (event: 'scrollEndX'): void;
  (event: 'scroll', payload: Event): void;
  (event: 'mousedown', payload: MouseEvent): void;
  (event: 'mouseleave', payload: MouseEvent): void;
  (event: 'mouseup', payload: MouseEvent): void;
  (event: 'mousemove', payload: MouseEvent): void;
}

export interface IVScrollbarExpose {
  el: TemplateRef<HTMLDivElement>;
}

export interface IVScrollbarInstance {
  el: HTMLDivElement | null;
}
