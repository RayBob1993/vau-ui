<script lang="ts" setup>
  import type { IVRadioProps, IVRadioModelValue } from './types';
  import { useRadio } from './composables';

  const props = defineProps<IVRadioProps>();

  const modelValue = defineModel<IVRadioModelValue>({
    required: true
  });

  const { isDisabled, isChecked } = useRadio(props, modelValue);
</script>

<template>
  <label
    class="v-radio-button"
    :class="{
      'v-radio-button--active': isChecked,
      'v-radio-button--disabled': isDisabled
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
