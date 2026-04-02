<script setup lang="ts">
  import type { SectionProps } from './types';

  defineProps<SectionProps>();
</script>

<template>
  <section
    class="section"
    :class="{
      [`section--theme-${theme}`]: theme,
      [`section--size-${size}`]: size,
      [`section--size-xs-${sizeXs}`]: sizeXs,
      [`section--size-sm-${sizeSm}`]: sizeSm,
      [`section--size-md-${sizeMd}`]: sizeMd,
      [`section--size-lg-${sizeLg}`]: sizeLg,
      [`section--size-xl-${sizeXl}`]: sizeXl,
      [`section--size-xxl-${sizeXxl}`]: sizeXxl
    }"
  >
    <slot/>
  </section>
</template>
