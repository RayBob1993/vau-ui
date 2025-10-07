<script lang="ts" setup>
  import type { IVFormExpose, IVFormModel, IVFormProps } from './types';
  import { useFormItems, useFormValidation, useFormErrorScroll } from './composables';
  import { VFormContextKey } from './context';
  import { useToggle } from '@vau/core';
  import { provide } from 'vue';

  const props = withDefaults(defineProps<IVFormProps>(), {
    scrollIntoViewOptions: () => ({
      block: 'center'
    })
  });

  const modelValue = defineModel<IVFormModel>('value',{
    required: true
  });

  const { formItems, registerFormItem, unregisterFormItem } = useFormItems();

  const { validate, clearValidate } = useFormValidation({
    formItems
  });

  const { scrollToErrorField } = useFormErrorScroll({
    formItems,
    scrollIntoViewOptions: props.scrollIntoViewOptions,
  });

  const [isValid] = useToggle();

  async function reset () {
    formItems.value.forEach(formItem => formItem.reset());

    await clearValidate();
  }

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
