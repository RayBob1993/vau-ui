<script setup lang="ts">
  import type { IVInputCodeProps } from './types';

  defineProps<IVInputCodeProps>();
</script>

<template>
  <fieldset class="v-input-code">
    <input
      type="text"
      maxlength="1"
      class="v-input-code__native"
      inputmode="numeric"
    >
  </fieldset>
</template>
