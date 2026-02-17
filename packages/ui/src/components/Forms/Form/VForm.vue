<script lang="ts" setup generic="MODEL extends IVFormModel">
  import type { IVFormEmits, IVFormExpose, IVFormModel, IVFormProps, IVFormSlots } from './types';
  import { useForm } from './composables';
  import { VFormContextKey } from './context';
  import { provide } from 'vue';

  const props = defineProps<IVFormProps<MODEL>>();

  const emit = defineEmits<IVFormEmits>();

  defineSlots<IVFormSlots>();

  const modelValue = defineModel<MODEL>({
    required: true
  });

  const {
    isValid,
    registerFormItem,
    unregisterFormItem,
    validate,
    clearValidate,
    reset
  } = useForm<MODEL>({
    modelValue: () => modelValue.value,
  });

  async function handleSubmit () {
    const isValid = await validate();

    emit('submit', {
      isValid,
      reset
    });
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
    @submit.prevent="handleSubmit"
  >
    <slot :is-valid="isValid"/>
  </form>
</template>
