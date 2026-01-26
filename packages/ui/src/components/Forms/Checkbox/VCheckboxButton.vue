<script lang="ts" setup>
  import type { IVCheckboxModelValue, IVCheckboxProps } from './types';
  import { useCheckbox } from './composables';

  const props = defineProps<IVCheckboxProps>();

  const modelValue = defineModel<IVCheckboxModelValue>({
    required: true
  });

  const { isDisabled, isChecked } = useCheckbox({
    props,
    modelValue
  });
</script>

<template>
  <label
    class="v-checkbox-button"
    :class="{
      'v-checkbox-button--disabled': isDisabled,
      'v-checkbox-button--active': isChecked
    }"
  >
    <input
      v-model="modelValue"
      :value="value"
      type="checkbox"
      :disabled="isDisabled"
      class="v-checkbox-button__native"
    >

    <span class="v-checkbox-button__label">
      <slot/>
    </span>
  </label>
</template>
