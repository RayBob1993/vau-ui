<script setup lang="ts">
  import type { TagProps, TagEmits } from './types';

  defineProps<TagProps>();

  const emit = defineEmits<TagEmits>();
</script>

<template>
  <div
    class="tag"
    :class="{
      [`tag--size-${size}`]: size,
      [`tag--theme-${theme}`]: theme
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
