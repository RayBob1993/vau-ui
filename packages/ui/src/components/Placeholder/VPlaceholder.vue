<script lang="ts" setup>
  import type { IVPlaceholderProps } from './types';

  defineProps<IVPlaceholderProps>();
</script>

<template>
  <div class="v-placeholder">
    <slot/>
  </div>
</template>
