<script setup lang="ts">
  import type { IVBadgeProps } from './types';

  defineProps<IVBadgeProps>();
</script>

<template>
  <div
    class="v-badge"
    :class="{
      [`v-badge--size-${size}`]: size,
      [`v-badge--theme-${theme}`]: theme
    }"
  />
</template>
