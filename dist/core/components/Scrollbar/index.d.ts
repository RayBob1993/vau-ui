import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { ScrollbarProps } from './types';
export declare const Scrollbar: {
    Root: {
        new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ScrollbarProps> & Readonly<{
            onMousedown?: ((payload: MouseEvent) => any) | undefined;
            onMouseleave?: ((payload: MouseEvent) => any) | undefined;
            onMousemove?: ((payload: MouseEvent) => any) | undefined;
            onMouseup?: ((payload: MouseEvent) => any) | undefined;
            onScroll?: ((payload: Event) => any) | undefined;
            onScrollEndY?: (() => any) | undefined;
            onScrollEndX?: (() => any) | undefined;
        }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
            mousedown: (payload: MouseEvent) => any;
            mouseleave: (payload: MouseEvent) => any;
            mousemove: (payload: MouseEvent) => any;
            mouseup: (payload: MouseEvent) => any;
            scroll: (payload: Event) => any;
            scrollEndY: () => any;
            scrollEndX: () => any;
        }, PublicProps, {
            vertical: boolean;
            draggableMultiplier: number;
            infiniteScrollOffset: number;
            debounceDelay: number;
        }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
            scrollbar: HTMLDivElement;
            content: HTMLDivElement;
        }, HTMLDivElement, ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly< ScrollbarProps> & Readonly<{
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
    } & ComponentOptionsBase<Readonly< ScrollbarProps> & Readonly<{
        onMousedown?: ((payload: MouseEvent) => any) | undefined;
        onMouseleave?: ((payload: MouseEvent) => any) | undefined;
        onMousemove?: ((payload: MouseEvent) => any) | undefined;
        onMouseup?: ((payload: MouseEvent) => any) | undefined;
        onScroll?: ((payload: Event) => any) | undefined;
        onScrollEndY?: (() => any) | undefined;
        onScrollEndX?: (() => any) | undefined;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
    }, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
};
export * from './types';
