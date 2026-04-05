import { ScrollbarProps } from '../types';
import { MaybeRefOrGetter, TemplateRef, Ref } from 'vue';
import { ThrottledFunction } from '../../..';
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
    isGrabbing: Ref<boolean, boolean>;
    handleScroll: ThrottledFunction<[event: Event]>;
    handleMousedown: (event: MouseEvent) => void;
    handleMouseleave: (event: MouseEvent) => void;
    handleMouseup: (event: MouseEvent) => void;
    handleMousemove: ThrottledFunction<[event: MouseEvent]>;
};
