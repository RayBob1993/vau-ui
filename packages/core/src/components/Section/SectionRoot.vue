<script setup lang="ts">
  import type { SectionProps } from './types';

  defineProps<SectionProps>();
</script>

<template>
  <section class="section">
    <slot/>
  </section>
</template>
