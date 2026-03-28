import type { ScrollbarProps } from '../types';
import { SCROLLBAR_DEBOUNCE_DELAY, SCROLLBAR_DRAGGABLE_MULTIPLIER, SCROLLBAR_INFINITE_SCROLL_OFFSET } from '../constants';
import { getScrollTop, getScrollLeft, getOffsetTop, getOffsetLeft } from '../utils';
import { debounce, isNumber, throttle } from '../../../utils';
import { useToggle } from '../../../composables';
import {
  type MaybeRefOrGetter,
  type TemplateRef,
  ref,
  computed,
  toValue,
  onScopeDispose
} from 'vue';

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

export function useScrollbarRoot (options: UseScrollbarRootOptions) {
  const props = computed<ScrollbarProps>(() => toValue(options.props));

  const infiniteScrollOffset = computed<number>(() => props.value?.infiniteScrollOffset ?? SCROLLBAR_INFINITE_SCROLL_OFFSET);
  const draggableMultiplier = computed<number>(() => props.value?.draggableMultiplier ?? SCROLLBAR_DRAGGABLE_MULTIPLIER);
  const debounceDelay = computed<number>(() => isNumber(props.value?.debounceDelay) ? props.value.debounceDelay : SCROLLBAR_DEBOUNCE_DELAY);

  const [isGrabbing, setGrabbing] = useToggle();
  const [isDown, setDown] = useToggle();

  const startX = ref<number>(0);
  const startY = ref<number>(0);
  const scrollTop = ref<number>(0);
  const scrollLeft = ref<number>(0);

  function resetDragState () {
    setDown(false);
    setGrabbing(false);
  }

  const handleScroll = debounce((event: Event) => {
    options.onScroll?.(event);

    if (!props.value?.draggable) {
      scrollTop.value = getScrollTop(options.scrollbar.value, Boolean(props.value?.vertical));
      scrollLeft.value = getScrollLeft(options.scrollbar.value, Boolean(props.value?.horizontal));
    }

    const scrollbarEl = options.scrollbar.value;
    const contentEl = options.content.value;
    const scrollbarHeight = scrollbarEl ? scrollbarEl.clientHeight : 0;
    const scrollbarWidth = scrollbarEl ? scrollbarEl.clientWidth : 0;
    const contentScrollWidth = contentEl ? contentEl.scrollWidth : 0;
    const contentScrollHeight = contentEl ? contentEl.scrollHeight : 0;
    const scrollBottom = scrollTop.value + scrollbarHeight;
    const scrollRight = scrollLeft.value + scrollbarWidth;
    const isScrollEndY = Boolean(props.value?.vertical && (contentScrollHeight - scrollBottom <= infiniteScrollOffset.value));
    const isScrollEndX = Boolean(props.value?.horizontal && (contentScrollWidth - scrollRight <= infiniteScrollOffset.value));

    if (isScrollEndY) {
      options.onScrollEndY?.();
    }

    if (isScrollEndX) {
      options.onScrollEndX?.();
    }
  }, debounceDelay.value);

  const handleMousemove = throttle((event: MouseEvent) => {
    options.onMousemove?.(event);

    if (!props.value?.draggable || !isDown.value) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const scrollbarEl = options.scrollbar.value;

    if (!scrollbarEl) {
      return;
    }

    const isVertical = Boolean(props.value?.vertical);
    const isHorizontal = Boolean(props.value?.horizontal);
    const y = event.pageY - getOffsetTop(scrollbarEl, isVertical);
    const x = event.pageX - getOffsetLeft(scrollbarEl, isHorizontal);
    const walkX = (x - startX.value) * draggableMultiplier.value;
    const walkY = (y - startY.value) * draggableMultiplier.value;

    if (isHorizontal) {
      scrollbarEl.scrollLeft = scrollLeft.value - walkX;
    }

    if (isVertical) {
      scrollbarEl.scrollTop = scrollTop.value - walkY;
    }
  }, debounceDelay.value);

  function handleMousedown (event: MouseEvent) {
    options.onMousedown?.(event);

    if (!props.value?.draggable) {
      return;
    }

    setDown(true);
    setGrabbing(true);

    const scrollbarEl = options.scrollbar.value;

    if (scrollbarEl) {
      const isVertical = Boolean(props.value?.vertical);
      const isHorizontal = Boolean(props.value?.horizontal);

      startY.value = event.pageY - getOffsetTop(scrollbarEl, isVertical);
      startX.value = event.pageX - getOffsetLeft(scrollbarEl, isHorizontal);
    }

    scrollTop.value = getScrollTop(options.scrollbar.value, Boolean(props.value?.vertical));
    scrollLeft.value = getScrollLeft(options.scrollbar.value, Boolean(props.value?.horizontal));
  }

  function handleMouseleave (event: MouseEvent) {
    options.onMouseleave?.(event);

    if (props.value?.draggable) {
      resetDragState();
    }
  }

  function handleMouseup (event: MouseEvent) {
    options.onMouseup?.(event);

    if (props.value?.draggable) {
      resetDragState();
    }
  }

  onScopeDispose(() => {
    handleScroll.cancel?.();
    handleMousemove.cancel?.();
  });

  return {
    isGrabbing,
    handleScroll,
    handleMousedown,
    handleMouseleave,
    handleMouseup,
    handleMousemove
  };
}
