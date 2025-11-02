<script lang="ts" setup>
  import type { IVFormExpose, IVFormModel, IVFormProps, IVFormSlots } from './types';
  import { useForm } from './composables';
  import { VFormContextKey } from './context';
  import { provide } from 'vue';

  const props = withDefaults(defineProps<IVFormProps>(), {
    scrollIntoViewOptions: () => ({
      block: 'center'
    })
  });

  defineSlots<IVFormSlots>();

  const modelValue = defineModel<IVFormModel>({
    required: true
  });

  const { isValid, registerFormItem, unregisterFormItem, validate, clearValidate, reset } = useForm(modelValue);

  defineExpose<IVFormExpose>({
    validate,
    clearValidate,
    reset
  });

  provide(VFormContextKey, {
    props,
    modelValue,
    registerFormItem,
    unregisterFormItem
  });
</script>

<template>
  <form
    class="v-form"
    :class="{
      'v-form--disabled': disabled
    }"
  >
    <slot :is-valid="isValid"/>
  </form>
</template>
