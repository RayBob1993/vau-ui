<script setup lang="ts">
  import { Tag, type TagProps, type TagEmits } from '@vau/core';

  const props = defineProps<TagProps>();

  const emit = defineEmits<TagEmits>();
</script>

<template>
  <Tag.Root
    v-bind="props"
    @delete="emit('delete', $event)"
  >
    <slot/>
  </Tag.Root>
</template>
