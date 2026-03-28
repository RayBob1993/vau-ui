<script lang="ts" setup>
  import { Checkbox, type CheckboxProps, type CheckboxModelValue } from '@vau/core';

  const props = defineProps<CheckboxProps>();

  const modelValue = defineModel<CheckboxModelValue>({
    required: true
  });
</script>

<template>
  <Checkbox.Root
    v-bind="props"
    v-model="modelValue"
  >
    <Checkbox.Indicator/>

    <Checkbox.Title>
      <slot/>
    </Checkbox.Title>
  </Checkbox.Root>
</template>
