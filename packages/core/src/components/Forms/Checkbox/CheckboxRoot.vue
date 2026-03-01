<script setup lang="ts">
  import type { CheckboxProps, CheckboxEmits, CheckboxModelValue } from './types';
  import { CheckboxRootContextKey } from './context';
  import { useCheckboxRoot } from './composables';
  import { useFormContext } from '../Form/context';
  import { provide, useTemplateRef, watch } from 'vue';

  const props = defineProps<CheckboxProps>();

  const emit = defineEmits<CheckboxEmits>();

  const modelValue = defineModel<CheckboxModelValue>({
    required: true
  });

  const { FormRootContext, FormItemContext, isValid, isInvalid } = useFormContext();

  const { isActive, isDisabled, isIndeterminate } = useCheckboxRoot({
    formRootContext: FormRootContext,
    formItemContext: FormItemContext,
    props: () => props,
    modelValue: () => modelValue.value
  });

  const inputRef = useTemplateRef<HTMLInputElement>('inputRef');

  watch([inputRef, isIndeterminate], ([el, indeterminate]) => {
    if (el) {
      el.indeterminate = Boolean(indeterminate);
    }
  }, {
    immediate: true
  });

  provide(CheckboxRootContextKey, {
    props: () => props,
    modelValue: () => modelValue.value,
    isActive: () => isActive.value,
    isDisabled: () => isDisabled.value,
    isIndeterminate: () => isIndeterminate.value,
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
      'checkbox--indeterminate': isIndeterminate,
      'checkbox--invalid': isInvalid,
      'checkbox--valid': isValid
    }"
  >
    <input
      ref="inputRef"
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
