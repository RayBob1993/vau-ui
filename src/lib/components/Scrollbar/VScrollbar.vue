<script setup lang="ts">
  import { useTemplateRef } from 'vue';

  const scrollbar = useTemplateRef<HTMLDivElement>('scrollbar');
  const content = useTemplateRef<HTMLDivElement>('content');
</script>

<template>
  <div
    ref="scrollbar"
    class="v-scrollbar"
  >
    <div
      ref="content"
      class="v-scrollbar__content"
    >
      <slot/>
    </div>
  </div>
</template>
