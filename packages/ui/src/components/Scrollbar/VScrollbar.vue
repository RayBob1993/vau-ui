<script setup lang="ts">
  import type { IVScrollbarProps, IVScrollbarEmits, IVScrollbarExpose } from './types';
  import { useToggle } from '@vau/core';
  import { useTemplateRef } from 'vue';

  withDefaults(defineProps<IVScrollbarProps>(), {
    vertical: true,
    horizontal: false,
    infiniteScrollOffset: 0,
    draggableMultiplier: 1
  });

  defineEmits<IVScrollbarEmits>();

  const scrollbar = useTemplateRef<HTMLDivElement>('scrollbar');
  const content = useTemplateRef<HTMLDivElement>('content');

  const [isGrabbing] = useToggle();

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
      'v-scrollbar--grabbing': isGrabbing
    }"
  >
    <div
      ref="content"
      class="v-scrollbar__content"
    >
      <slot/>
    </div>
  </div>
</template>
