<script setup lang="ts">
  import { useInputCodePin } from './composables';
  import { useInputCodeRootContext } from './context';

  const inputCodeRootContext = useInputCodeRootContext();

  const { isDisabled } = useInputCodePin({
    inputCodeRootContext
  });
</script>

<template>
  <input
    type="text"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    class="input-code-pin"
  >
</template>
