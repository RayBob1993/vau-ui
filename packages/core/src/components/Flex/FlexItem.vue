<script setup lang="ts">
  import type { FlexItemProps } from './types';

  defineProps<FlexItemProps>();
</script>

<template>
  <div
    class="flex-item"
    :class="{

    }"
  >
    <slot/>
  </div>
</template>
