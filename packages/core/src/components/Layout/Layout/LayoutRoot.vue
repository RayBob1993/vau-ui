<script setup lang="ts">
  import type { LayoutSlots } from './types';

  defineSlots<LayoutSlots>();
</script>

<template>
  <div class="layout">
    <slot name="header"/>

    <slot/>

    <slot name="footer"/>
  </div>
</template>
