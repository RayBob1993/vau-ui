<script setup lang="ts">
  import type { AlertProps } from './types';

  defineProps<AlertProps>();
</script>

<template>
  <div
    class="alert"
    :class="{
      [`alert--theme-${theme}`]: theme,
      [`alert--size-${size}`]: size
    }"
  >
    <slot/>
  </div>
</template>
