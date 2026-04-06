import type { SizeProp, ThemeProp } from '../../types';
export type ScrollbarProps = {
    vertical?: boolean;
    horizontal?: boolean;
    draggableMultiplier?: number;
    infiniteScrollOffset?: number;
    debounceDelay?: number;
    draggable?: boolean;
    hidden?: boolean;
} & Partial<SizeProp> & Partial<ThemeProp>;
export interface ScrollbarEmits {
    scrollEndY: [];
    scrollEndX: [];
    scroll: [payload: Event];
    mousedown: [payload: MouseEvent];
    mouseleave: [payload: MouseEvent];
    mouseup: [payload: MouseEvent];
    mousemove: [payload: MouseEvent];
}
