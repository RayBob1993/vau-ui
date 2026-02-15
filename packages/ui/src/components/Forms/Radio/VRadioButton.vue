<script lang="ts" setup>
  import type { IVRadioProps, IVRadioModelValue } from './types';
  import { useRadio } from './composables';

  const props = defineProps<IVRadioProps>();

  const modelValue = defineModel<IVRadioModelValue>({
    required: true
  });

  const { isDisabled, isChecked, validationStatus } = useRadio({
    props,
    modelValue: () => modelValue.value
  });
</script>

<template>
  <label
    class="v-radio-button"
    :class="{
      'v-radio-button--active': isChecked,
      'v-radio-button--disabled': isDisabled,
      'v-radio-button--invalid': validationStatus?.isError,
      'v-radio-button--valid': validationStatus?.isSuccess
    }"
  >
    <input
      v-model="modelValue"
      type="radio"
      :disabled="isDisabled"
      :value="value"
      class="v-radio-button__native"
    >

    <span class="v-radio-button__label">
      <slot/>
    </span>
  </label>
</template>
