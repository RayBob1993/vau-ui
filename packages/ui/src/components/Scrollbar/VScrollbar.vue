<script setup lang="ts">
  import { Scrollbar, type ScrollbarProps, type ScrollbarEmits } from '@vau/core';

  const props = defineProps<ScrollbarProps>();

  const emit = defineEmits<ScrollbarEmits>();
</script>

<template>
  <Scrollbar.Root
    v-bind="props"
    v-on="emit"
  >
    <slot/>
  </Scrollbar.Root>
</template>
