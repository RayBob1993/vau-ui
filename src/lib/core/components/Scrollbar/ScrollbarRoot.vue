<script setup lang="ts">
  import type { ScrollbarProps, ScrollbarEmits } from './types';
  import { useScrollbarRoot } from './composables';
  import { SCROLLBAR_DRAGGABLE_MULTIPLIER, SCROLLBAR_INFINITE_SCROLL_OFFSET, SCROLLBAR_DEBOUNCE_DELAY } from './constants';
  import { useTemplateRef } from 'vue';

  const props = withDefaults(defineProps<ScrollbarProps>(), {
    vertical: true,
    debounceDelay: SCROLLBAR_DEBOUNCE_DELAY,
    infiniteScrollOffset: SCROLLBAR_INFINITE_SCROLL_OFFSET,
    draggableMultiplier: SCROLLBAR_DRAGGABLE_MULTIPLIER
  });

  const emit = defineEmits<ScrollbarEmits>();

  const scrollbar = useTemplateRef<HTMLDivElement>('scrollbar');
  const content = useTemplateRef<HTMLDivElement>('content');

  const {
    isGrabbing,
    handleScroll,
    handleMousedown,
    handleMouseleave,
    handleMouseup,
    handleMousemove
  } = useScrollbarRoot({
    props: () => props,
    scrollbar,
    content,
    onScroll: event => emit('scroll', event),
    onMousedown: event => emit('mousedown', event),
    onMouseleave: event => emit('mouseleave', event),
    onMouseup: event => emit('mouseup', event),
    onMousemove: event => emit('mousemove', event),
    onScrollEndY: () => emit('scrollEndY'),
    onScrollEndX: () => emit('scrollEndX')
  });
</script>

<template>
  <div
    ref="scrollbar"
    class="scrollbar"
    :class="{
      'scrollbar--hidden': hidden,
      'scrollbar--draggable': draggable,
      'scrollbar--vertical': vertical,
      'scrollbar--horizontal': horizontal,
      'scrollbar--grabbing': isGrabbing,
      [`scrollbar--size-${size}`]: size,
      [`scrollbar--theme-${theme}`]: theme
    }"
    @scroll="handleScroll"
    @mousedown="handleMousedown"
    @mouseleave="handleMouseleave"
    @mouseup="handleMouseup"
    @mousemove="handleMousemove"
  >
    <div
      ref="content"
      class="scrollbar__content"
    >
      <slot/>
    </div>
  </div>
</template>
