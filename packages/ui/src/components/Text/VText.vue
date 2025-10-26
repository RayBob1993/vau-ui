<script setup lang="ts">
  import type { IVTextProps } from './types';

  withDefaults(defineProps<IVTextProps>(), {
    tag: 'div'
  });
</script>

<template>
  <component
    :is="tag"
    class="v-text"
    :class="{
      'v-text--uppercase': uppercase,
      'v-text--underline': underline,
      [`v-text--size-${size}`]: size,
      [`v-text--theme-${theme}`]: theme
    }"
  >
    <span
      v-if="content"
      v-html="content"
    />

    <slot v-else/>
  </component>
</template>
