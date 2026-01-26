<script lang="ts" setup>
  import type { IVInputNumberProps, IVInputNumberModelValue } from './types';
  import { useInputNumber } from './composables';

  const props = withDefaults(defineProps<IVInputNumberProps>(), {
    min: -Infinity,
    max: Infinity,
    step: 1
  });

  const modelValue = defineModel<IVInputNumberModelValue>({
    default: 0
  });

  const {
    isDisabled,
    isDecrementDisabled,
    isIncrementDisabled,
    handleDecrement,
    handleIncrement
  } = useInputNumber({
    props,
    modelValue,
    onDecrement: value => {
      modelValue.value = value;
    },
    onIncrement: value => {
      modelValue.value = value;
    },
  });
</script>

<template>
  <div class="v-input-number">
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
