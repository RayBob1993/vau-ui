<script setup lang="ts">
  import { Text, type TextProps } from '@vau/core';

  const props = defineProps<TextProps>();
</script>

<template>
  <Text.Root v-bind="props">
    <slot/>
  </Text.Root>
</template>
