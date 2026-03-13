<script setup lang="ts">
  import type { IVInputCodeProps } from './types';
  import { InputCode, type InputCodeModelValue } from '@vau/core';

  const props = defineProps<IVInputCodeProps>();

  const modelValue = defineModel<InputCodeModelValue>({
    required: true,
  });
</script>

<template>
  <InputCode.Root
    v-bind="props"
    v-model="modelValue"
  >
    <InputCode.Pin
      v-for="(pin, index) in length"
      :key="`pin-${index}`"
    />
  </InputCode.Root>
</template>
