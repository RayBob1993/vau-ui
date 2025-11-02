<script setup lang="ts">
  import type { IVOverlayProps } from './types';

  withDefaults(defineProps<IVOverlayProps>(), {
    mask: true,
    blur: true
  });
</script>

<template>
  <div
    class="v-overlay"
    :class="{
      'v-overlay--mask': mask,
      'v-overlay--blur': mask && blur
    }"
  >
    <slot/>
  </div>
</template>
