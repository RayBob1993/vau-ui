<script setup lang="ts">
  import type { FlexProps } from './types';

  withDefaults(defineProps<FlexProps>(), {
    wrap: true
  });
</script>

<template>
  <div
    class="flex"
    :class="{
      'flex--wrap': wrap,
      [`flex--justify-${justify}`]: justify,
      [`flex--align-${align}`]: align,
      [`flex--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>
