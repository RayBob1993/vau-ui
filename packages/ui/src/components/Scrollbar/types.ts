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
  scrollEndY: [];
  scrollEndX: [];
  scroll: [payload: Event];
  mousedown: [payload: MouseEvent];
  mouseleave: [payload: MouseEvent];
  mouseup: [payload: MouseEvent];
  mousemove: [payload: MouseEvent];
}

export interface IVScrollbarExpose {
  el: TemplateRef<HTMLDivElement>;
}

export interface IVScrollbarInstance {
  el: HTMLDivElement | null;
}
