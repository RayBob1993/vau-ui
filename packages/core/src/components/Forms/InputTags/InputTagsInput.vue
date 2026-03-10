<script setup lang="ts">
  import { useInputTagsInput } from './composables';
  import { useInputTagsRootContext } from './context';

  const inputTagsRootContext = useInputTagsRootContext();

  const { handleEnter, handleTab } = useInputTagsInput({
    inputTagsRootContext
  });
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
