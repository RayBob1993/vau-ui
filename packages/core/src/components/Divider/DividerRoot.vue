<script setup lang="ts">
  import type { DividerProps } from './types';

  defineProps<DividerProps>();
</script>

<template>
  <div
    class="divider"
    :class="{
      [`divider--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>
