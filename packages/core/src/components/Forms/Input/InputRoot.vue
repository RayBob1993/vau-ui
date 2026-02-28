<script setup lang="ts">
  import type { InputModelValue, InputProps, InputEmits, InputSlots, InputExpose } from './types';
  import { useInputRoot } from './composables';
  import { InputRootContextKey } from './context';
  import { InputModes, InputNativeTypes, InputTypes } from '../../../constants';
  import { useFormContext } from '../Form/context';
  import { provide } from 'vue';

  const props = withDefaults(defineProps<InputProps>(), {
    type: InputTypes.INPUT,
    nativeType: InputNativeTypes.TEXT,
    inputMode: InputModes.TEXT
  });

  const emit = defineEmits<InputEmits>();

  defineSlots<InputSlots>();

  const modelValue = defineModel<InputModelValue>({
    required: true
  });

  const { FormRootContext, FormItemContext, isValid, isInvalid } = useFormContext();

  const { isDisabled, isTextarea, hasValue, isFocus, setFocus, setModelValue } = useInputRoot({
    formRootContext: FormRootContext,
    formItemContext: FormItemContext,
    modelValue: () => modelValue.value,
    props: () => props,
    onSetValue: value => {
      modelValue.value = value;
    }
  });

  provide(InputRootContextKey, {
    isDisabled: () => isDisabled.value,
    props: () => props,
    modelValue: () => modelValue.value,
    setFocus,
    setModelValue,
    emit
  });

  defineExpose<InputExpose>({
    setFocus
  });
</script>

<template>
  <div
    class="input"
    :class="{
      'input--focus': isFocus,
      'input--textarea': isTextarea,
      'input--filled': hasValue,
      'input--disabled': isDisabled,
      'input--invalid': isInvalid,
      'input--valid': isValid
    }"
  >
    <slot
      :is-focus="isFocus"
      :has-value="hasValue"
      :is-invalid="isInvalid"
      :is-valid="isValid"
    />
  </div>
</template>
