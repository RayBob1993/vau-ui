<script lang="ts" setup>
  import type { ColProps } from './types';

  defineProps<ColProps>();
</script>

<template>
  <div
    class="col"
    :class="{
      [`col--size-${size}`]: size,
      [`col--size-xs-${sizeXs}`]: sizeXs,
      [`col--size-sm-${sizeSm}`]: sizeSm,
      [`col--size-md-${sizeMd}`]: sizeMd,
      [`col--size-lg-${sizeLg}`]: sizeLg,
      [`col--size-xl-${sizeXl}`]: sizeXl,
      [`col--size-xxl-${sizeXxl}`]: sizeXxl,
      [`col--offset-${offset}`]: offset,
      [`col--offset-xs-${offsetXs}`]: offsetXs,
      [`col--offset-sm-${offsetSm}`]: offsetSm,
      [`col--offset-md-${offsetMd}`]: offsetMd,
      [`col--offset-lg-${offsetLg}`]: offsetLg,
      [`col--offset-xl-${offsetXl}`]: offsetXl,
      [`col--offset-xxl-${offsetXxl}`]: offsetXxl,
      [`col--order-${order}`]: order,
      [`col--order-xs-${orderXs}`]: orderXs,
      [`col--order-sm-${orderSm}`]: orderSm,
      [`col--order-md-${orderMd}`]: orderMd,
      [`col--order-lg-${orderLg}`]: orderLg,
      [`col--order-xl-${orderXl}`]: orderXl,
      [`col--order-xxl-${orderXxl}`]: orderXxl
    }"
  >
    <slot/>
  </div>
</template>
