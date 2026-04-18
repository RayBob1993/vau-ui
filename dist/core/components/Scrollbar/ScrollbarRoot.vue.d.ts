import type { ScrollbarProps } from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import("vue").DefineComponent<ScrollbarProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: (payload: Event) => any;
    mousedown: (payload: MouseEvent) => any;
    mouseleave: (payload: MouseEvent) => any;
    mousemove: (payload: MouseEvent) => any;
    mouseup: (payload: MouseEvent) => any;
    scrollEndY: () => any;
    scrollEndX: () => any;
}, string, import("vue").PublicProps, Readonly<ScrollbarProps> & Readonly<{
    onScroll?: ((payload: Event) => any) | undefined;
    onMousedown?: ((payload: MouseEvent) => any) | undefined;
    onMouseleave?: ((payload: MouseEvent) => any) | undefined;
    onMousemove?: ((payload: MouseEvent) => any) | undefined;
    onMouseup?: ((payload: MouseEvent) => any) | undefined;
    onScrollEndY?: (() => any) | undefined;
    onScrollEndX?: (() => any) | undefined;
}>, {
    vertical: boolean;
    draggableMultiplier: number;
    infiniteScrollOffset: number;
    debounceDelay: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
