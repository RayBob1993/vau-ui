<script setup lang="ts">
  import type { TextProps } from './types';
  import { Primitive } from '../Primitive';

  withDefaults(defineProps<TextProps>(), {
    as: 'div'
  });
</script>

<template>
  <Primitive.Root
    :as="as"
    :as-child="asChild"
    class="text"
    :class="{
      'text--uppercase': uppercase,
      'text--underline': underline,
      [`text--size-${size}`]: size,
      [`text--size-xs-${sizeXs}`]: sizeXs,
      [`text--size-sm-${sizeSm}`]: sizeSm,
      [`text--size-md-${sizeMd}`]: sizeMd,
      [`text--size-lg-${sizeLg}`]: sizeLg,
      [`text--size-xl-${sizeXl}`]: sizeXl,
      [`text--size-xxl-${sizeXxl}`]: sizeXxl,
      [`text--theme-${theme}`]: theme,
      [`text--weight-${weight}`]: weight
    }"
  >
    <slot/>
  </Primitive.Root>
</template>
