export declare const Scrollbar: {
    Root: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./types').ScrollbarProps> & Readonly<{
            onMousedown?: ((payload: MouseEvent) => any) | undefined;
            onMouseleave?: ((payload: MouseEvent) => any) | undefined;
            onMousemove?: ((payload: MouseEvent) => any) | undefined;
            onMouseup?: ((payload: MouseEvent) => any) | undefined;
            onScroll?: ((payload: Event) => any) | undefined;
            onScrollEndY?: (() => any) | undefined;
            onScrollEndX?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            mousedown: (payload: MouseEvent) => any;
            mouseleave: (payload: MouseEvent) => any;
            mousemove: (payload: MouseEvent) => any;
            mouseup: (payload: MouseEvent) => any;
            scroll: (payload: Event) => any;
            scrollEndY: () => any;
            scrollEndX: () => any;
        }, import('vue').PublicProps, {
            vertical: boolean;
            draggableMultiplier: number;
            infiniteScrollOffset: number;
            debounceDelay: number;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            scrollbar: HTMLDivElement;
            content: HTMLDivElement;
        }, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./types').ScrollbarProps> & Readonly<{
            onMousedown?: ((payload: MouseEvent) => any) | undefined;
            onMouseleave?: ((payload: MouseEvent) => any) | undefined;
            onMousemove?: ((payload: MouseEvent) => any) | undefined;
            onMouseup?: ((payload: MouseEvent) => any) | undefined;
            onScroll?: ((payload: Event) => any) | undefined;
            onScrollEndY?: (() => any) | undefined;
            onScrollEndX?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            vertical: boolean;
            draggableMultiplier: number;
            infiniteScrollOffset: number;
            debounceDelay: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./types').ScrollbarProps> & Readonly<{
        onMousedown?: ((payload: MouseEvent) => any) | undefined;
        onMouseleave?: ((payload: MouseEvent) => any) | undefined;
        onMousemove?: ((payload: MouseEvent) => any) | undefined;
        onMouseup?: ((payload: MouseEvent) => any) | undefined;
        onScroll?: ((payload: Event) => any) | undefined;
        onScrollEndY?: (() => any) | undefined;
        onScrollEndX?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        mousedown: (payload: MouseEvent) => any;
        mouseleave: (payload: MouseEvent) => any;
        mousemove: (payload: MouseEvent) => any;
        mouseup: (payload: MouseEvent) => any;
        scroll: (payload: Event) => any;
        scrollEndY: () => any;
        scrollEndX: () => any;
    }, string, {
        vertical: boolean;
        draggableMultiplier: number;
        infiniteScrollOffset: number;
        debounceDelay: number;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export * from './types';
