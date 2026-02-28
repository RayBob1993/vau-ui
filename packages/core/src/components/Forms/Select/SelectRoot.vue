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

  const { Root, Item, validationStatus } = useFormContext();

  const {
    activeOption,
    activeOptions,
    hasValue,
    isOpen,
    isDisabled,
    toggleOpen,
    registerOption,
    unregisterOption,
    handleChange
  } = useSelectRoot({
    formContext: Root,
    formItemContext: Item,
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
    activeOption,
    activeOptions,
    modelValue,
    props,
    hasValue,
    isOpen,
    isDisabled,
    toggleOpen,
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
      'select--invalid': validationStatus?.isError,
      'select--valid': validationStatus?.isSuccess
    }"
  >
    <slot/>
  </div>
</template>
