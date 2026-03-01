<script setup lang="ts">
  import type { SwitchProps, SwitchModelValue } from './types';
  import { useSwitchRoot } from './composables';
  import { SwitchRootContextKey } from './context';
  import { useFormContext } from '../Form/context';
  import { provide } from 'vue';

  const props = defineProps<SwitchProps>();

  const modelValue = defineModel<SwitchModelValue>({
    required: true,
  });

  const { FormRootContext, FormItemContext, isValid, isInvalid } = useFormContext();

  const { isDisabled, isActive } = useSwitchRoot({
    formRootContext: FormRootContext,
    formItemContext: FormItemContext,
    props: () => props,
    modelValue: () => modelValue.value,
  });

  provide(SwitchRootContextKey, {
    props: () => props,
    isActive: () => isActive.value,
    isDisabled: () => isDisabled.value,
    isValid: () => isValid.value,
    isInvalid: () => isInvalid.value
  });
</script>

<template>
  <label class="switch">
    <input
      v-model="modelValue"
      type="checkbox"
      :disabled="isDisabled"
      class="switch__input"
    >

    <slot/>
  </label>
</template>
