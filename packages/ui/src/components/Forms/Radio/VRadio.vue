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
    class="v-radio"
    :class="{
      'v-radio--active': isChecked,
      'v-radio--disabled': isDisabled
    }"
  >
    <input
      v-model="modelValue"
      type="radio"
      :disabled="isDisabled"
      :value="value"
      class="v-radio__native"
    >

    <span class="v-radio__label">
      <slot/>
    </span>
  </label>
</template>
