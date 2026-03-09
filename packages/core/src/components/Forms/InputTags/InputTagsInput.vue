<script setup lang="ts">
  import { useInputTagsInput } from './composables';

  const { handleEnter, handleTab } = useInputTagsInput();
</script>

<template>
  <div class="input-tags-input">
    <input
      type="text"
      @keydown.enter="handleEnter"
      @keydown.tab="handleTab"
    >
  </div>
</template>
