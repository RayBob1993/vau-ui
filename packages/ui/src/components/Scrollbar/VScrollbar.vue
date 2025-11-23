<script setup lang="ts">
  import type { IVScrollbarProps, IVScrollbarEmits, IVScrollbarExpose } from './types';
  import { useScrollbar } from './composables';
  import { SCROLLBAR_DRAGGABLE_MULTIPLIER, SCROLLBAR_INFINITE_SCROLL_OFFSET, SCROLLBAR_DEBOUNCE_DELAY } from './constants';
  import { useTemplateRef } from 'vue';

  const props = withDefaults(defineProps<IVScrollbarProps>(), {
    vertical: true,
    horizontal: false,
    debounceDelay: SCROLLBAR_DEBOUNCE_DELAY,
    infiniteScrollOffset: SCROLLBAR_INFINITE_SCROLL_OFFSET,
    draggableMultiplier: SCROLLBAR_DRAGGABLE_MULTIPLIER
  });

  const emit = defineEmits<IVScrollbarEmits>();

  const scrollbar = useTemplateRef<HTMLDivElement>('scrollbar');
  const content = useTemplateRef<HTMLDivElement>('content');

  const {
    isGrabbing,
    handleScroll,
    handleMousedown,
    handleMouseleave,
    handleMouseup,
    handleMousemove
  } = useScrollbar(props, {
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

  defineExpose<IVScrollbarExpose>({
    el: scrollbar
  });
</script>

<template>
  <div
    ref="scrollbar"
    class="v-scrollbar"
    :class="{
      'v-scrollbar--hidden': hidden,
      'v-scrollbar--draggable': draggable,
      'v-scrollbar--vertical': vertical,
      'v-scrollbar--horizontal': horizontal,
      'v-scrollbar--grabbing': isGrabbing,
      [`v-scrollbar--size-${size}`]: size,
      [`v-scrollbar--theme-${theme}`]: theme
    }"
    @scroll="handleScroll"
    @mousedown="handleMousedown"
    @mouseleave="handleMouseleave"
    @mouseup="handleMouseup"
    @mousemove="handleMousemove"
  >
    <div
      ref="content"
      class="v-scrollbar__content"
    >
      <slot/>
    </div>
  </div>
</template>
