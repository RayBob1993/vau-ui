<script setup lang="ts">
  import type { IVTagProps } from './types';

  defineProps<IVTagProps>();
</script>

<template>
  <div class="v-tag">
    <slot/>
  </div>
</template>
