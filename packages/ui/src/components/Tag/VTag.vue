<script setup lang="ts">
  import type { IVTagProps } from './types';

  defineProps<IVTagProps>();
</script>

<template>
  <div
    class="v-tag"
    :class="{
      [`v-tag--size-${size}`]: size,
      [`v-tag--theme-${theme}`]: theme
    }"
  >
    <slot/>
  </div>
</template>
