<script lang="ts" setup>
  import type { IVInputMaskProps } from './types';
  import type { IVInputInstance, IVInputModelValue } from '../Input/types';
  import { VInput } from '../Input';
  import { useTemplateRef } from 'vue';

  defineProps<IVInputMaskProps>();

  const modelValue = defineModel<IVInputModelValue>({
    required: true
  });

  const inputRef = useTemplateRef<IVInputInstance>('input');
</script>

<template>
  <v-input
    ref="inputRef"
    v-model="modelValue"
    class="v-input-mask"
  />
</template>
