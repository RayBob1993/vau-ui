<script setup lang="ts">
  import type { IVCollapseProps } from './types';

  defineProps<IVCollapseProps>();
</script>

<template>
  <div class="v-collapse">
    <slot/>
  </div>
</template>
