<script lang="ts" setup generic="MODEL extends FormModel">
  import {
    type FormEmits,
    type FormModel,
    type FormProps,
    type FormSlots,
    Form
  } from '@vau/core';

  const props = defineProps<FormProps<MODEL>>();

  const emit = defineEmits<FormEmits>();

  defineSlots<FormSlots>();

  const modelValue = defineModel<MODEL>({
    required: true
  });
</script>

<template>
  <Form.Root
    v-slot="scope"
    v-model="modelValue"
    v-bind="props"
    v-on="emit"
  >
    <slot v-bind="scope"/>
  </Form.Root>
</template>
