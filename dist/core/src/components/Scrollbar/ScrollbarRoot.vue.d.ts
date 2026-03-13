import { ScrollbarProps } from './types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        scrollbar: HTMLDivElement;
        content: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ScrollbarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    mousedown: (payload: MouseEvent) => any;
    mouseleave: (payload: MouseEvent) => any;
    mousemove: (payload: MouseEvent) => any;
    mouseup: (payload: MouseEvent) => any;
    scroll: (payload: Event) => any;
    scrollEndY: () => any;
    scrollEndX: () => any;
}, string, import('vue').PublicProps, Readonly<ScrollbarProps> & Readonly<{
    onMousedown?: ((payload: MouseEvent) => any) | undefined;
    onMouseleave?: ((payload: MouseEvent) => any) | undefined;
    onMousemove?: ((payload: MouseEvent) => any) | undefined;
    onMouseup?: ((payload: MouseEvent) => any) | undefined;
    onScroll?: ((payload: Event) => any) | undefined;
    onScrollEndY?: (() => any) | undefined;
    onScrollEndX?: (() => any) | undefined;
}>, {
    vertical: boolean;
    draggableMultiplier: number;
    infiniteScrollOffset: number;
    debounceDelay: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    scrollbar: HTMLDivElement;
    content: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
