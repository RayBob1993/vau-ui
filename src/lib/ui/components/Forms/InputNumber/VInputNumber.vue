<script lang="ts" setup>
  import { InputNumber, type InputNumberProps, type InputNumberModelValue, INPUT_NUMBER_VALUE_DEFAULT, INPUT_NUMBER_ACTIONS } from '@vau/core';

  const props = defineProps<InputNumberProps>();

  const modelValue = defineModel<InputNumberModelValue>({
    default: INPUT_NUMBER_VALUE_DEFAULT
  });
</script>

<template>
  <InputNumber.Root
    v-bind="props"
    v-model="modelValue"
  >
    <InputNumber.Button :action="INPUT_NUMBER_ACTIONS.DECREMENT"/>

    <InputNumber.Input/>

    <InputNumber.Button :action="INPUT_NUMBER_ACTIONS.INCREMENT"/>
  </InputNumber.Root>
</template>
