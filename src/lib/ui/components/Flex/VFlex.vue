<script setup lang="ts">
  import { Flex, type FlexProps } from '@vau/core';

  const props = withDefaults(defineProps<FlexProps>(), {
    wrap: true
  });
</script>

<template>
  <Flex.Root v-bind="props">
    <slot/>
  </Flex.Root>
</template>
