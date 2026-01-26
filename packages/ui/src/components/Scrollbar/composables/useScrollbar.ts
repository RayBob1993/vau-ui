import type { IVScrollbarProps } from '../types';
import { SCROLLBAR_DRAGGABLE_MULTIPLIER, SCROLLBAR_INFINITE_SCROLL_OFFSET, SCROLLBAR_DEBOUNCE_DELAY } from '../constants';
import { ref, type TemplateRef, toRef } from 'vue';
import { useToggle, debounce, throttle, isNumber } from '@vau/core';

export interface IUseScrollbarOptions {
  props: IVScrollbarProps;
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

export function useScrollbar (options: IUseScrollbarOptions) {
  const infiniteScrollOffset = toRef<number>(options.props?.infiniteScrollOffset || SCROLLBAR_INFINITE_SCROLL_OFFSET);
  const draggableMultiplier = toRef<number>(options.props?.draggableMultiplier || SCROLLBAR_DRAGGABLE_MULTIPLIER);
  const debounceDelay = toRef<number>(isNumber(options.props.debounceDelay) ? options.props.debounceDelay : SCROLLBAR_DEBOUNCE_DELAY);

  const [isGrabbing, setGrabbing] = useToggle();
  const [isDown, setDown] = useToggle();

  const startX = ref<number>(0);
  const startY = ref<number>(0);

  const scrollTop = ref<number>(0);
  const scrollLeft = ref<number>(0);

  const handleScroll = debounce((event: Event) => {
    options?.onScroll?.(event);

    if (!options.props.draggable) {
      scrollTop.value = getScrollbarScrollTop();
      scrollLeft.value = getScrollbarScrollLeft();
    }

    const scrollbarHeight: number = options.scrollbar.value ? options.scrollbar.value.clientHeight : 0;
    const scrollbarWidth: number = options.scrollbar.value ? options.scrollbar.value.clientWidth : 0;
    const contentScrollWidth: number = options.content.value ? options.content.value.scrollWidth : 0;
    const contentScrollHeight: number = options.content.value ? options.content.value.scrollHeight : 0;

    const scrollBottom: number = scrollTop.value + scrollbarHeight;
    const scrollRight: number = scrollLeft.value + scrollbarWidth;

    const isScrollEndY: boolean = Boolean(options.props.vertical && (contentScrollHeight - scrollBottom <= infiniteScrollOffset.value));
    const isScrollEndX: boolean = Boolean(options.props.horizontal && (contentScrollWidth - scrollRight <= infiniteScrollOffset.value));

    if (isScrollEndY) {
      options?.onScrollEndY?.();
    }

    if (isScrollEndX) {
      options?.onScrollEndX?.();
    }
  }, debounceDelay.value);

  const handleMousemove = throttle((event: MouseEvent) => {
    options?.onMousemove?.(event);

    if (!options.props.draggable) {
      return;
    }

    if (!isDown.value) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (options.scrollbar.value) {
      const y: number = event.pageY - getScrollbarOffsetTop();
      const x: number = event.pageX - getScrollbarOffsetLeft();

      const walkX: number = (x - startX.value) * draggableMultiplier.value;
      const walkY: number = (y - startY.value) * draggableMultiplier.value;

      if (options.props.horizontal) {
        options.scrollbar.value.scrollLeft = scrollLeft.value - walkX;
      }

      if (options.props.vertical) {
        options.scrollbar.value.scrollTop = scrollTop.value - walkY;
      }
    }
  }, debounceDelay.value);

  function handleMousedown (event: MouseEvent) {
    options?.onMousedown?.(event);

    if (!options.props.draggable) {
      return;
    }

    setDown(true);
    setGrabbing(true);

    if (options.scrollbar.value) {
      startY.value = event.pageY - getScrollbarOffsetTop();
      startX.value = event.pageX - getScrollbarOffsetLeft();
    }

    scrollTop.value = getScrollbarScrollTop();
    scrollLeft.value = getScrollbarScrollLeft();
  }

  function handleMouseleave (event: MouseEvent) {
    options?.onMouseleave?.(event);

    if (!options.props.draggable) {
      return;
    }

    setDown(false);
    setGrabbing(false);
  }

  function handleMouseup (event: MouseEvent) {
    options?.onMouseup?.(event);

    if (!options.props.draggable) {
      return;
    }

    setDown(false);
    setGrabbing(false);
  }

  function getScrollbarScrollTop (): number {
    return options.props.vertical && options.scrollbar.value
      ? options.scrollbar.value.scrollTop
      : 0;
  }

  function getScrollbarScrollLeft (): number {
    return options.props.horizontal && options.scrollbar.value
      ? options.scrollbar.value.scrollLeft
      : 0;
  }

  function getScrollbarOffsetTop (): number {
    return options.props.vertical && options.scrollbar.value
      ? options.scrollbar.value.offsetTop
      : 0;
  }

  function getScrollbarOffsetLeft (): number {
    return options.props.horizontal && options.scrollbar.value
      ? options.scrollbar.value.offsetLeft
      : 0;
  }

  return {
    isGrabbing,
    handleScroll,
    handleMousedown,
    handleMouseleave,
    handleMouseup,
    handleMousemove
  };
}
