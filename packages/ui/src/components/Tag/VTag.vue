<script setup lang="ts">
  import  { Tag, type TagProps, type TagEmits } from '@vau/core';

  const props = defineProps<TagProps>();

  const emit = defineEmits<TagEmits>();
</script>

<template>
  <Tag.Root
    v-bind="props"
    v-on="emit"
  >
    <slot/>
  </Tag.Root>
</template>
