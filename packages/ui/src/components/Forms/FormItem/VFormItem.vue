<script lang="ts" setup>
  import type {
    IVFormItemExpose,
    IVFormItemInstance,
    IVFormItemProps,
    IVFormItemSlots,
    IVFormItemValidationStatus
  } from './types';
  import { useForm } from '../Form';
  import { delay } from '@vau/core';
  import { useTemplateRef, defineAsyncComponent, useId, ref, onUnmounted, computed } from 'vue';

  const props = defineProps<IVFormItemProps>();

  defineSlots<IVFormItemSlots>();

  const VFormItemErrors = defineAsyncComponent(() => import('./VFormItemErrors.vue'));

  const { Form } = useForm();
  const id = useId();

  const root = useTemplateRef<HTMLDivElement>('root');

  const validationStatus = ref<IVFormItemValidationStatus>({
    isError: false,
    isValidating: false,
    isSuccess: false
  });

  const isRequired = computed<boolean>(() => true);

  const isValidatable = computed<boolean>(() => true);

  const formItemInstance = computed<IVFormItemInstance>(() => ({
    el: root,
    id,
    props,
    validationStatus,
    isRequired,
    isValidatable,
    reset,
    validate,
    clearValidate
  }));

  function reset () {}

  async function validate (silent = false): Promise<boolean> {
    await delay(0);

    return true;
  }

  function clearValidate () {}

  Form?.registerFormItem(formItemInstance);

  onUnmounted(() => {
    Form?.unregisterFormItem(formItemInstance);
  });

  defineExpose<IVFormItemExpose>({
    reset,
    validate,
    clearValidate
  });
</script>

<template>
  <div
    ref="root"
    class="v-form-item"
  >
    <slot/>

    <v-form-item-errors :errors="[]"/>
  </div>
</template>
