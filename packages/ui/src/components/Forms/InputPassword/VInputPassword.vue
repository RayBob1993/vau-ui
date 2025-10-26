<script lang="ts" setup>
  import type { IVInputPasswordProps } from './types';
  import type { IVInputModelValue } from '../Input/types';
  import { useInputPassword } from './composables';
  import { VInput } from '../Input';

  const props = defineProps<IVInputPasswordProps>();

  const modelValue = defineModel<IVInputModelValue>({
    required: true
  });

  const { currentType, handleToggleType } = useInputPassword();
</script>

<template>
  <v-input
    v-model="modelValue"
    class="v-input-password"
    :native-type="currentType"
    v-bind="props"
  >
    <template #after>
      <button
        type="button"
        @click="handleToggleType"
      >
        @
      </button>
    </template>
  </v-input>
</template>
