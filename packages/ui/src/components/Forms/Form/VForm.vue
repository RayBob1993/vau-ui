<script lang="ts" setup>
  import type { IVFormEmits, IVFormExpose, IVFormModel, IVFormProps, IVFormSlots } from './types';
  import { useForm } from './composables';
  import { VFormContextKey } from './context';
  import { provide } from 'vue';

  const props = withDefaults(defineProps<IVFormProps>(), {
    scrollIntoViewOptions: () => ({
      block: 'center'
    })
  });

  const emit = defineEmits<IVFormEmits>();

  defineSlots<IVFormSlots>();

  const modelValue = defineModel<IVFormModel>({
    required: true
  });

  const {
    isValid,
    registerFormItem,
    unregisterFormItem,
    validate,
    clearValidate,
    reset
  } = useForm({
    modelValue: () => modelValue.value,
  });

  function handleSubmit () {
    emit('submit', {
      isValid: isValid.value,
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
