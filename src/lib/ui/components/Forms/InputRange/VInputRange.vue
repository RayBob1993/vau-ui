<script lang="ts" setup>
  import type { IVInputRangeProps, IVInputRangeModelValue } from './types';
  import { useInputRange } from "./composables";

  const props = defineProps<IVInputRangeProps>();

  const modelValue = defineModel<IVInputRangeModelValue>({
    required: true,
  });

  const { isDisabled, validationStatus } = useInputRange({
    modelValue: () => modelValue.value,
    props
  });
</script>

<template>
  <div
    class="v-input-range"
    :class="{
      'v-input-range--disabled': isDisabled,
      'v-input-range--invalid': validationStatus?.isError,
      'v-input-range--valid': validationStatus?.isSuccess
    }"
  >
    <div class="v-input-range__input">
      <input
        class="v-input-range__input-native v-input-range__input-native--min"
        type="text"
        :disabled="isDisabled"
      >

      <input
        class="v-input-range__input-native v-input-range__input-native--max"
        type="text"
        :disabled="isDisabled"
      >
    </div>
  </div>
</template>
