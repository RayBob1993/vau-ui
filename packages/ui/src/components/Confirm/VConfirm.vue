<script setup lang="ts">
  import type { IVConfirmProps } from './types';

  defineProps<IVConfirmProps>();
</script>

<template>
  <div
    class="v-confirm"
    :class="{
      [`v-confirm--size-${size}`]: size,
      [`v-confirm--theme-${theme}`]: theme
    }"
  />
</template>
