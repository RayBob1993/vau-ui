<script setup lang="ts">
  import type { IVTagProps, IVTagEmits } from './types';

  defineProps<IVTagProps>();

  const emit = defineEmits<IVTagEmits>();
</script>

<template>
  <div
    class="v-tag"
    :class="{
      [`v-tag--size-${size}`]: size,
      [`v-tag--theme-${theme}`]: theme
    }"
  >
    <slot/>

    <button
      v-if="canDelete"
      type="button"
      @click="emit('delete')"
    >
      X
    </button>
  </div>
</template>
