<script setup lang="ts">
  import type { SelectProps, SelectEmits, SelectModelValue } from './types';
  import { useSelectRoot } from './composables';
  import { SelectRootContextKey } from './context';
  import { useFormContext } from '../Form/context';
  import { provide } from 'vue';

  const props = defineProps<SelectProps>();
  const emit = defineEmits<SelectEmits>();

  const modelValue = defineModel<SelectModelValue>({
    required: true
  });

  const { FormRootContext, FormItemContext, isValid, isInvalid } = useFormContext();

  const {
    activeOption,
    activeOptions,
    hasValue,
    isOpen,
    isDisabled,
    toggle,
    registerOption,
    unregisterOption,
    handleChange
  } = useSelectRoot({
    formRootContext: FormRootContext,
    formItemContext: FormItemContext,
    modelValue: () => modelValue.value,
    props: () => props,
    onChangeModel: value => {
      modelValue.value = value;
    },
    onChange: value => {
      emit('change', value);
    },
    onClear: () => {
      emit('clear');
    },
  });

  provide(SelectRootContextKey, {
    activeOption: () => activeOption.value,
    activeOptions: () => activeOptions.value,
    modelValue: () => modelValue.value,
    props: () => props,
    hasValue: () => hasValue.value,
    isOpen: () => isOpen.value,
    isDisabled: () => isDisabled.value,
    toggle,
    registerOption,
    unregisterOption,
    handleChange
  });
</script>

<template>
  <div
    class="select"
    :class="{
      'select--disabled': isDisabled,
      'select--open': isOpen,
      'select--filled': hasValue,
      'select--invalid': isInvalid,
      'select--valid': isValid
    }"
  >
    <slot/>
  </div>
</template>
