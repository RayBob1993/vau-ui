<script setup lang="ts">
  import type { MenuProps } from './types';

  defineProps<MenuProps>();
</script>

<template>
  <nav
    class="menu"
    :class="{
      [`menu--direction-${direction}`]: direction,
      [`menu--theme-${theme}`]: theme,
      [`menu--size-${size}`]: size,
      [`menu--size-xs-${sizeXs}`]: sizeXs,
      [`menu--size-sm-${sizeSm}`]: sizeSm,
      [`menu--size-md-${sizeMd}`]: sizeMd,
      [`menu--size-lg-${sizeLg}`]: sizeLg,
      [`menu--size-xl-${sizeXl}`]: sizeXl,
      [`menu--size-xxl-${sizeXxl}`]: sizeXxl
    }"
  >
    <slot/>
  </nav>
</template>
