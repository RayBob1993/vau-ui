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
      [`row--justify-xs-${justifyXs}`]: justifyXs,
      [`row--justify-sm-${justifySm}`]: justifySm,
      [`row--justify-md-${justifyMd}`]: justifyMd,
      [`row--justify-lg-${justifyLg}`]: justifyLg,
      [`row--justify-xl-${justifyXl}`]: justifyXl,
      [`row--justify-xxl-${justifyXxl}`]: justifyXxl,
      [`row--align-${align}`]: align,
      [`row--align-xs-${alignXs}`]: alignXs,
      [`row--align-sm-${alignSm}`]: alignSm,
      [`row--align-md-${alignMd}`]: alignMd,
      [`row--align-lg-${alignLg}`]: alignLg,
      [`row--align-xl-${alignXl}`]: alignXl,
      [`row--align-xxl-${alignXxl}`]: alignXxl,
      'row--gutters-x': guttersX,
      'row--gutters-y': guttersY,
      'row--wrap': wrap,
      'row--no-wrap': !wrap
    }"
  >
    <slot/>
  </div>
</template>
