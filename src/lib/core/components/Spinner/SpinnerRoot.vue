<script setup lang="ts">
  import type { SpinnerProps } from './types';

  defineProps<SpinnerProps>();
</script>

<template>
  <div
    class="spinner"
    aria-label="Loading"
    :class="{
      [`spinner--theme-${theme}`]: theme,
      [`spinner--size-${size}`]: size
    }"
  />
</template>
