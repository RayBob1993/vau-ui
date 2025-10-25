<script setup lang="ts">
  import type { IVAlertProps } from './types';

  defineProps<IVAlertProps>();
</script>

<template>
  <div
    class="v-alert"
    :class="{
      [`v-alert--size-${size}`]: size,
      [`v-alert--theme-${theme}`]: theme
    }"
  />
</template>
