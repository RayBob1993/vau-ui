<script lang="ts" setup>
  import type { IVInputExpose, IVInputModelValue, IVInputNative, IVInputProps } from './types';
  import { useInput } from './composables';
  import { InputModes, InputNativeTypes, InputTypes } from '../../../constants';
  import { useTemplateRef } from 'vue';

  const props = withDefaults(defineProps<IVInputProps>(), {
    type: InputTypes.INPUT,
    nativeType: InputNativeTypes.TEXT,
    inputMode: InputModes.TEXT
  });

  const modelValue = defineModel<IVInputModelValue>({
    required: true
  });

  const input = useTemplateRef<IVInputNative>('input');

  const { isDisabled, isTextarea, isFocus } = useInput(props, modelValue);

  function focus () {
    input.value?.focus();
  }

  defineExpose<IVInputExpose>({
    input,
    focus
  });
</script>

<template>
  <div
    class="v-input"
    :class="{
      'v-input--textarea': isTextarea,
      'v-input--focus': isFocus,
      'v-input--disabled': isDisabled
    }"
  >
    <input
      v-if="!isTextarea"
      ref="input"
      v-model="modelValue"
      :type="nativeType"
      :inputmode="inputMode"
      class="v-input__native"
      :readonly="readonly"
      :disabled="isDisabled"
      :autocomplete="autocomplete"
    >

    <textarea
      v-else
      ref="input"
      v-model="modelValue"
      class="v-input__native"
      :readonly="readonly"
      :disabled="isDisabled"
    />
  </div>
</template>
