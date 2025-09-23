<script setup lang="ts">
  import type { IVDividerProps } from './types';

  defineProps<IVDividerProps>();
</script>

<template>
  <div class="v-divider">
    <slot/>
  </div>
</template>
