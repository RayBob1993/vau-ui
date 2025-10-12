<script lang="ts" setup>
  import type { IVSwitchProps } from './types';

  defineProps<IVSwitchProps>();
</script>

<template>
  <div class="v-switch">
    <input
      type="checkbox"
      class="v-switch__native"
    >
  </div>
</template>
