<script lang="ts" setup>
  import type { IVInputNumberProps, IVInputNumberModelValue } from './types';
  import { useForm } from '../Form';
  import { computed } from 'vue';

  const props = withDefaults(defineProps<IVInputNumberProps>(), {
    min: -Infinity,
    max: Infinity,
    step: 1
  });

  const modelValue = defineModel<IVInputNumberModelValue>({
    default: 0
  });

  const { isFormDisabled } = useForm();

  const isDisabled = computed<boolean>(() => props.disabled || isFormDisabled.value);
  const isDecrementDisabled = computed<boolean>(() => isDisabled.value || modelValue.value === props.min);
  const isIncrementDisabled = computed<boolean>(() => isDisabled.value || !(modelValue.value < props.max));

  function handleDecrement () {
    if (modelValue.value > props.min) {
      modelValue.value -= props.step;
    }
  }

  function handleIncrement () {
    if (modelValue.value < props.max) {
      modelValue.value += props.step;
    }
  }
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
