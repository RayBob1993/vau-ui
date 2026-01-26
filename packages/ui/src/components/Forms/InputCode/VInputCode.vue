<script setup lang="ts">
  import type { IVInputCodeProps } from './types';
  import { useInputCode } from './composables';

  const props = defineProps<IVInputCodeProps>();

  const { isDisabled } = useInputCode({
    props
  });
</script>

<template>
  <fieldset
    class="v-input-code"
    :class="{
      'v-input-code--disabled': isDisabled
    }"
  >
    <input
      type="text"
      maxlength="1"
      class="v-input-code__native"
      inputmode="numeric"
      :disabled="isDisabled"
    >
  </fieldset>
</template>
