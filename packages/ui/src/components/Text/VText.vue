<script setup lang="ts">
  import type { IVTextProps } from './types';

  defineProps<IVTextProps>();
</script>

<template>
  <div
    class="v-text"
    :class="{
      [`v-text--size-${size}`]: size,
      [`v-text--theme-${theme}`]: theme
    }"
  >
    <slot/>
  </div>
</template>
