import { ScrollbarProps } from '../types';
import { MaybeRefOrGetter, TemplateRef } from 'vue';
export interface UseScrollbarRootOptions {
    props: MaybeRefOrGetter<ScrollbarProps>;
    scrollbar: TemplateRef<HTMLDivElement>;
    content: TemplateRef<HTMLDivElement>;
    onScroll?: (event: Event) => void;
    onMousedown?: (event: MouseEvent) => void;
    onMouseleave?: (event: MouseEvent) => void;
    onMouseup?: (event: MouseEvent) => void;
    onMousemove?: (event: MouseEvent) => void;
    onScrollEndY?: VoidFunction;
    onScrollEndX?: VoidFunction;
}
export declare function useScrollbarRoot(options: UseScrollbarRootOptions): {
    isGrabbing: import('vue').Ref<boolean, boolean>;
    handleScroll: import('../../..').ThrottledFunction<[event: Event]>;
    handleMousedown: (event: MouseEvent) => void;
    handleMouseleave: (event: MouseEvent) => void;
    handleMouseup: (event: MouseEvent) => void;
    handleMousemove: import('../../..').ThrottledFunction<[event: MouseEvent]>;
};
