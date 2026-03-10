<script lang="ts" setup>
  import type { RowProps } from './types';

  withDefaults(defineProps<RowProps>(), {
    wrap: true,
    guttersX: true
  });
</script>

<template>
  <div
    class="row"
    :class="{
      [`row--justify-${justify}`]: justify,
      [`row--align-${align}`]: align,
      'row--gutters-x': guttersX,
      'row--gutters-y': guttersY
    }"
  >
    <slot/>
  </div>
</template>
