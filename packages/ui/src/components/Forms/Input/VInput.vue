<script lang="ts" setup>
  import type { IVInputExpose, IVInputModelValue, IVInputNative, IVInputProps, IVInputSlots } from './types';
  import { useInput } from './composables';
  import { InputModes, InputNativeTypes, InputTypes } from '../../../constants';
  import { useTemplateRef } from 'vue';

  const props = withDefaults(defineProps<IVInputProps>(), {
    type: InputTypes.INPUT,
    nativeType: InputNativeTypes.TEXT,
    inputMode: InputModes.TEXT
  });

  defineSlots<IVInputSlots>();

  const modelValue = defineModel<IVInputModelValue>({
    required: true
  });

  const input = useTemplateRef<IVInputNative>('input');

  const { isDisabled, isTextarea, isFocus, validationStatus } = useInput({
    modelValue: () => modelValue.value,
    props
  });

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
      'v-input--disabled': isDisabled,
      'v-input--invalid': validationStatus?.isError,
      'v-input--valid': validationStatus?.isSuccess
    }"
  >
    <div class="v-input__body">
      <div
        v-if="$slots?.before"
        class="v-input__body-content v-input__body-content--before"
      >
        <slot name="before"/>
      </div>

      <div class="v-input__body-control">
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

      <div
        v-if="$slots?.after"
        class="v-input__body-content v-input__body-content--after"
      >
        <slot name="after"/>
      </div>
    </div>
  </div>
</template>
