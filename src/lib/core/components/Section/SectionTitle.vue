<script setup lang="ts">
  import type { SectionTitleProps } from './types';

  withDefaults(defineProps<SectionTitleProps>(), {
    level: 'h1'
  });
</script>

<template>
  <component
    :is="level"
    class="section-title"
    :class="{
      [`section-title--level-${level}`]: level
    }"
  >
    <slot/>
  </component>
</template>
