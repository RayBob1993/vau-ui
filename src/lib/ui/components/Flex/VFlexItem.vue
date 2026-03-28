<script setup lang="ts">
  import { Flex, type FlexItemProps } from '@vau/core';

  const props = defineProps<FlexItemProps>();
</script>

<template>
  <Flex.Item v-bind="props">
    <slot/>
  </Flex.Item>
</template>
