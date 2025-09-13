<script lang="ts" setup>
  import type { IVInputProps } from './types';

  defineProps<IVInputProps>();
</script>

<template>
  <div class="v-input">
    <input
      ref="input"
      type="text"
      class="v-input__native"
    >
  </div>
</template>
