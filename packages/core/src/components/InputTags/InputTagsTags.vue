<script setup lang="ts">
  import { useInputTagsTags } from './composables';
  import { useInputTagsRootContext } from './context';

  const inputTagsRootContext = useInputTagsRootContext();

  const {  } = useInputTagsTags({
    inputTagsRootContext
  });
</script>

<template>
  <div class="input-tags-tags"/>
</template>
