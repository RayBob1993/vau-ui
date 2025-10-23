<script lang="ts" setup>
  import type { IVCheckboxProps, IVCheckboxModelValue } from './types';
  import { useCheckbox } from './composables';

  const props = defineProps<IVCheckboxProps>();

  const modelValue = defineModel<IVCheckboxModelValue>({
    required: true
  });

  const { isDisabled, isChecked } = useCheckbox(props, modelValue);
</script>

<template>
  <label
    class="v-checkbox"
    :class="{
      'v-checkbox--disabled': isDisabled,
      'v-checkbox--active': isChecked
    }"
  >
    <input
      v-model="modelValue"
      :value="value"
      type="checkbox"
      :disabled="isDisabled"
      class="v-checkbox__native"
    >

    <span class="v-checkbox__label">
      <slot/>
    </span>
  </label>
</template>
