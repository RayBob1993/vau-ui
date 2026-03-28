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
      'flex--no-wrap': !wrap,
      [`flex--direction-${direction}`]: direction,
      [`flex--justify-${justify}`]: justify,
      [`flex--justify-xs-${justifyXs}`]: justifyXs,
      [`flex--justify-sm-${justifySm}`]: justifySm,
      [`flex--justify-md-${justifyMd}`]: justifyMd,
      [`flex--justify-lg-${justifyLg}`]: justifyLg,
      [`flex--justify-xl-${justifyXl}`]: justifyXl,
      [`flex--justify-xxl-${justifyXxl}`]: justifyXxl,
      [`flex--align-${align}`]: align,
      [`flex--align-xs-${alignXs}`]: alignXs,
      [`flex--align-sm-${alignSm}`]: alignSm,
      [`flex--align-md-${alignMd}`]: alignMd,
      [`flex--align-lg-${alignLg}`]: alignLg,
      [`flex--align-xl-${alignXl}`]: alignXl,
      [`flex--align-xxl-${alignXxl}`]: alignXxl
    }"
  >
    <slot/>
  </div>
</template>
