<script setup lang="ts">
  import { Select, type OptionProps, type OptionSlots } from '@vau/core';

  const props = defineProps<OptionProps>();

  defineSlots<OptionSlots>();
</script>

<template>
  <Select.Option
    v-slot="scopedSlot"
    v-bind="props"
  >
    <slot v-bind="scopedSlot"/>
  </Select.Option>
</template>
