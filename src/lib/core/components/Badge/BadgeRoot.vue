<script setup lang="ts">
  import type { BadgeProps } from './types';
  import { useBadgeRoot } from './composables';

  const props = defineProps<BadgeProps>();

  const {} = useBadgeRoot({
    props: () => props
  });
</script>

<template>
  <div
    class="badge"
    :class="{
      [`badge--size-${size}`]: size,
      [`badge--size-xs-${sizeXs}`]: sizeXs,
      [`badge--size-sm-${sizeSm}`]: sizeSm,
      [`badge--size-md-${sizeMd}`]: sizeMd,
      [`badge--size-lg-${sizeLg}`]: sizeLg,
      [`badge--size-xl-${sizeXl}`]: sizeXl,
      [`badge--size-xxl-${sizeXxl}`]: sizeXxl,
      [`badge--theme-${theme}`]: theme
    }"
  >
    <slot/>
  </div>
</template>
