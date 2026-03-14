<script setup lang="ts">
  import type { TextProps } from './types';

  withDefaults(defineProps<TextProps>(), {
    tag: 'div'
  });
</script>

<template>
  <component
    :is="tag"
    class="text"
    :class="{
      'text--uppercase': uppercase,
      'text--underline': underline,
      [`text--size-${size}`]: size,
      [`text--theme-${theme}`]: theme
    }"
  >
    <slot/>
  </component>
</template>
