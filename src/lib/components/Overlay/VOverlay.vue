<script setup lang="ts">
  import type { IVOverlayProps } from './types';

  withDefaults(defineProps<IVOverlayProps>(), {
    mask: true
  });
</script>

<template>
  <div class="v-overlay">
    <slot/>
  </div>
</template>
