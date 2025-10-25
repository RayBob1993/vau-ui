<script lang="ts" setup>
  import type { IVInputPasswordProps, IVInputPasswordNativeType } from './types';
  import type { IVInputModelValue } from '../Input/types';
  import { VInput } from '../Input';
  import { InputNativeTypes } from '../../../constants';
  import { ref } from 'vue';

  defineProps<IVInputPasswordProps>();

  const modelValue = defineModel<IVInputModelValue>({
    required: true
  });

  const currentType = ref<IVInputPasswordNativeType>(InputNativeTypes.PASSWORD);

  function handleToggleType () {
    if (currentType.value === InputNativeTypes.PASSWORD) {
      currentType.value = InputNativeTypes.TEXT;
    } else {
      currentType.value = InputNativeTypes.PASSWORD;
    }
  }
</script>

<template>
  <v-input
    v-model="modelValue"
    class="v-input-password"
    :native-type="currentType"
  />
</template>
