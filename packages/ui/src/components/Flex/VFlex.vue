<script setup lang="ts">
  import type { IVFlexProps } from './types';

  withDefaults(defineProps<IVFlexProps>(), {
    wrap: true
  });
</script>

<template>
  <div
    class="v-flex"
    :class="{
      [`v-flex--justify-${justify}`]: justify,
      [`v-flex--align-${align}`]: align,
      [`v-flex--direction-${direction}`]: direction,
      'v-flex--no-wrap': !wrap
    }"
  >
    <slot/>
  </div>
</template>
