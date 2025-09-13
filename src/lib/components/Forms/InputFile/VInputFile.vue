<script lang="ts" setup>
  import type { IVInputFileProps } from './types';

  defineProps<IVInputFileProps>();
</script>

<template>
  <div class="v-input-file">
    <input
      ref="input"
      class="v-input-file__native"
      type="file"
    >
  </div>
</template>
