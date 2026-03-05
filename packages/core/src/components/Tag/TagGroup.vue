<script setup lang="ts">
  import type { TagGroupProps } from './types';

  defineProps<TagGroupProps>();
</script>

<template>
  <div
    class="tag-group"
    :class="{
      [`tag-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>
