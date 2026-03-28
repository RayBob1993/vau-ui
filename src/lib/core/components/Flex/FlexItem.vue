<script setup lang="ts">
  import type { FlexItemProps } from './types';

  defineProps<FlexItemProps>();
</script>

<template>
  <div
    class="flex-item"
    :class="{
      [`flex-item--flex-${flex}`]: flex
    }"
  >
    <slot/>
  </div>
</template>
