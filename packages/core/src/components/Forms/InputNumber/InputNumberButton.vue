<script setup lang="ts">
  import type { InputNumberButtonProps } from './types';
  import { useInputNumberRootContext } from './context';
  import { useInputNumberButton } from './composables';

  const props = defineProps<InputNumberButtonProps>();

  const InputNumberRootContext = useInputNumberRootContext();

  const { handleAction, isDisabled, isDecrement, isIncrement } = useInputNumberButton({
    inputNumberRootContext: InputNumberRootContext,
    props: () => props
  });
</script>

<template>
  <button
    class="input-number-button"
    :class="{
      [`input-number-button--${action}`]: action
    }"
    :disabled="isDisabled"
    type="button"
    @click="handleAction"
  >
    <slot>
      <template v-if="isDecrement">
        -
      </template>

      <template v-else-if="isIncrement">
        +
      </template>
    </slot>
  </button>
</template>
