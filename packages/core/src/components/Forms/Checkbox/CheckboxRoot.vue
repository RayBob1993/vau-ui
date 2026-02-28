<script setup lang="ts">
  import type { CheckboxProps, CheckboxEmits, CheckboxModelValue } from './types';
  import { CheckboxRootContextKey } from './context';
  import { useCheckboxRoot } from './composables';
  import { useFormContext } from '../Form/context';
  import { provide } from 'vue';

  const props = defineProps<CheckboxProps>();

  const emit = defineEmits<CheckboxEmits>();

  const modelValue = defineModel<CheckboxModelValue>({
    required: true
  });

  const { FormRootContext, FormItemContext, isValid, isInvalid } = useFormContext();

  const { isActive, isDisabled } = useCheckboxRoot({
    formRootContext: FormRootContext,
    formItemContext: FormItemContext,
    props: () => props,
    modelValue: () => modelValue.value
  });

  provide(CheckboxRootContextKey, {
    props: () => props,
    modelValue: () => modelValue.value,
    isActive: () => isActive.value,
    isDisabled: () => isDisabled.value,
    isValid: () => isValid.value,
    isInvalid: () => isInvalid.value
  });
</script>

<template>
  <label
    class="checkbox"
    :class="{
      'checkbox--disabled': isDisabled,
      'checkbox--active': isActive,
      'checkbox--invalid': isInvalid,
      'checkbox--valid': isValid
    }"
  >
    <input
      v-model="modelValue"
      :value="value"
      type="checkbox"
      :disabled="isDisabled"
      class="checkbox__input"
      v-on="emit"
    >

    <slot/>
  </label>
</template>
