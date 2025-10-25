<script setup lang="ts">
  import type { IVToastProps } from './types';

  defineProps<IVToastProps>();
</script>

<template>
  <div
    class="v-toast"
    :class="{
      [`v-toast--size-${size}`]: size,
      [`v-toast--theme-${theme}`]: theme
    }"
  />
</template>
