<script setup lang="ts">
  import type { IVSpinnerProps } from './types';

  defineProps<IVSpinnerProps>();
</script>

<template>
  <div
    class="v-spinner"
    :class="{
      [`v-spinner--size-${size}`]: size,
      [`v-spinner--theme-${theme}`]: theme
    }"
  />
</template>
