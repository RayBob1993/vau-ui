<script setup lang="ts">
  import type { InputCodeProps, InputCodeModelValue } from './types';
  import { useInputCodeRoot } from './composables';
  import { InputCodeRootContextKey } from './context';
  import { useFormContext } from '../Form/context';
  import { provide } from 'vue';

  const props = defineProps<InputCodeProps>();
  const modelValue = defineModel<InputCodeModelValue>({
    required: true,
  });

  const { FormRootContext, FormItemContext, isValid, isInvalid } = useFormContext();

  const { isDisabled } = useInputCodeRoot({
    formRootContext: FormRootContext,
    formItemContext: FormItemContext,
    modelValue: () => modelValue.value,
    props: () => props
  });

  provide(InputCodeRootContextKey, {
    props: () => props,
    isDisabled: () => isDisabled.value,
  });
</script>

<template>
  <div
    class="input-code"
    :class="{
      'input-code--disabled': isDisabled,
      'input-code--invalid': isInvalid,
      'input-code--valid': isValid
    }"
  >
    <slot/>
  </div>
</template>
