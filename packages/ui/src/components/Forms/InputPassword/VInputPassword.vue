<script lang="ts" setup>
  import { InputPassword, type InputPasswordProps, type InputModelValue } from '@vau/core';

  const props = defineProps<InputPasswordProps>();

  const modelValue = defineModel<InputModelValue>({
    required: true
  });
</script>

<template>
  <InputPassword.Root
    v-model="modelValue"
    v-bind="props"
  />
</template>
