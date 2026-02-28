<script setup lang="ts">
  import type { InputModelValue, InputProps, InputEmits } from './types';
  import { useInputRoot } from './composables';
  import { InputRootContextKey } from './context/key.ts';
  import { InputModes, InputNativeTypes, InputTypes } from '../../../constants';
  import { useFormContext } from '../Form/context';
  import { provide } from 'vue';

  const props = withDefaults(defineProps<InputProps>(), {
    type: InputTypes.INPUT,
    nativeType: InputNativeTypes.TEXT,
    inputMode: InputModes.TEXT
  });

  const emit = defineEmits<InputEmits>();

  const modelValue = defineModel<InputModelValue>({
    required: true
  });

  const { Root, Item, validationStatus } = useFormContext();

  const { isDisabled, isTextarea, hasValue, isFocus, setFocus } = useInputRoot({
    formContext: Root,
    formItemContext: Item,
    modelValue: () => modelValue.value,
    props: () => props,
  });

  provide(InputRootContextKey, {
    isDisabled,
    props,
    modelValue,
    setFocus,
    emit
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
      'input--invalid': validationStatus?.isError,
      'input--valid': validationStatus?.isSuccess
    }"
  >
    <slot/>
  </div>
</template>
