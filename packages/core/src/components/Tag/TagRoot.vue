<script setup lang="ts">
  import type { TagProps, TagEmits } from './types';
  import { useTagRoot } from './composables';

  const props = defineProps<TagProps>();

  const emit = defineEmits<TagEmits>();

  const { handleDelete } = useTagRoot({
    props: () => props,
    onDelete (value) {
      emit('delete', value);
    },
  });
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
      @click="handleDelete"
    >
      X
    </button>
  </div>
</template>
