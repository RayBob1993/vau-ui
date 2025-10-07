<script setup lang="ts">
  import type { IVTextProps } from './types';

  defineProps<IVTextProps>();
</script>

<template>
  <div class="v-text">
    <slot/>
  </div>
</template>
