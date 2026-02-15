<script lang="ts" setup>
  import type { IVInputNumberProps, IVInputNumberModelValue } from './types';
  import { useInputNumber, useInputNumberWheel } from './composables';
  import { INPUT_NUMBER_STEP } from './constants';

  const props = withDefaults(defineProps<IVInputNumberProps>(), {
    min: -Infinity,
    max: Infinity,
    step: INPUT_NUMBER_STEP
  });

  const modelValue = defineModel<IVInputNumberModelValue>({
    default: 0
  });

  const {
    isDisabled,
    isDecrementDisabled,
    isIncrementDisabled,
    validationStatus,
    handleDecrement,
    handleIncrement
  } = useInputNumber({
    props,
    modelValue: () => modelValue.value,
    onDecrement: value => {
      modelValue.value = value;
    },
    onIncrement: value => {
      modelValue.value = value;
    },
  });

  const { handleWheel } = useInputNumberWheel({
    mousewheel: () => props.mousewheel,
    onDecrement: handleDecrement,
    onIncrement: handleIncrement
  });
</script>

<template>
  <div
    class="v-input-number"
    :class="{
      [`v-input-number--direction-${direction}`]: direction,
      'v-input-number--invalid': validationStatus?.isError,
      'v-input-number--valid': validationStatus?.isSuccess
    }"
  >
    <button
      class="v-input-number__button v-input-number__button--decrement"
      type="button"
      :disabled="isDecrementDisabled"
      @click="handleDecrement"
    >
      -
    </button>

    <div class="v-input-number__input">
      <input
        v-model.number="modelValue"
        type="number"
        class="v-input-number__input-native"
        :step="step"
        :min="min"
        :max="max"
        :disabled="isDisabled"
        :readonly="readonly"
        @wheel="handleWheel"
      >
    </div>

    <button
      class="v-input-number__button v-input-number__button--increment"
      type="button"
      :disabled="isIncrementDisabled"
      @click="handleIncrement"
    >
      +
    </button>
  </div>
</template>
