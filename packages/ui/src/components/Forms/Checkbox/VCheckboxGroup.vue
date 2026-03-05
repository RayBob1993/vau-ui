<script setup lang="ts">
  import { Checkbox, type CheckboxGroupProps } from '@vau/core';

  const props = defineProps<CheckboxGroupProps>();
</script>

<template>
  <Checkbox.Group v-bind="props">
    <slot/>
  </Checkbox.Group>
</template>
