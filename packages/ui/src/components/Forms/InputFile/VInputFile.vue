<script lang="ts" setup>
  import type { IVInputFileProps } from './types';
  import { useInputFile } from './composables';

  const props = defineProps<IVInputFileProps>();

  const { isDisabled } = useInputFile(props);
</script>

<template>
  <div
    class="v-input-file"
    :class="{
      'v-input-file--disabled': isDisabled
    }"
  >
    <input
      ref="input"
      class="v-input-file__native"
      type="file"
      :disabled="isDisabled"
    >
  </div>
</template>
