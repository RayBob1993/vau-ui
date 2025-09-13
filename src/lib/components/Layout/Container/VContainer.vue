<script lang="ts" setup>
  import type { IVContainerProps } from './types';

  defineProps<IVContainerProps>();
</script>

<template>
  <div class="v-container">
    <slot/>
  </div>
</template>
