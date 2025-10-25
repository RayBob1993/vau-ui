<script setup lang="ts">
  import type { IVAvatarProps } from './types';

  defineProps<IVAvatarProps>();
</script>

<template>
  <div
    class="v-avatar"
    :class="{
      'v-avatar--circle': circle,
      [`v-avatar--size-${size}`]: size,
      [`v-avatar--theme-${theme}`]: theme
    }"
  >
    <div
      v-if="label"
      class="v-avatar__label"
    >
      {{ label }}
    </div>
  </div>
</template>
