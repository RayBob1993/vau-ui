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
      [`menu--size-${size}`]: size
    }"
  >
    <slot/>
  </nav>
</template>
