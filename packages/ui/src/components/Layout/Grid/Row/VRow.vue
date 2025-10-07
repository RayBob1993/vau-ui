<script lang="ts" setup>
  import type { IVRowProps } from './types';

  withDefaults(defineProps<IVRowProps>(), {
    wrap: true,
    guttersX: true
  });
</script>

<template>
  <div
    class="v-row"
    :class="{
      [`v-row-v-row--justify-${justify}`]: justify,
      [`v-row-v-row--align-${align}`]: align,
      'v-row--gutters-x': guttersX,
      'v-row--gutters-y': guttersY,
      'v-row--no-wrap': !wrap
    }"
  >
    <slot/>
  </div>
</template>
