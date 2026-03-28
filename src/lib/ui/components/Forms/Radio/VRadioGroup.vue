<script setup lang="ts">
  import { Radio, type RadioGroupProps } from '@vau/core';

  const props = defineProps<RadioGroupProps>();
</script>

<template>
  <Radio.Group v-bind="props">
    <slot/>
  </Radio.Group>
</template>
