<script setup lang="ts">
  import { Tag, type TagGroupProps } from '@vau/core';

  const props = defineProps<TagGroupProps>();
</script>

<template>
  <Tag.Group v-bind="props">
    <slot/>
  </Tag.Group>
</template>
