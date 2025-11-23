import type { TemplateRef } from 'vue';
import type { ISizeProp, IThemeProp } from '../../types';

/**
 * Интерфейс свойств компонента VScrollbar
 * @interface IVScrollbarProps
 */
export type IVScrollbarProps = {
  vertical?: boolean;
  horizontal?: boolean;
  draggableMultiplier?: number;
  infiniteScrollOffset?: number;
  debounceDelay?: number;
  draggable?: boolean;
  hidden?: boolean;
} & Partial<ISizeProp> & Partial<IThemeProp>;

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
