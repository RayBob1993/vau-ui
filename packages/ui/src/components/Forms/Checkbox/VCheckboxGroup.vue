<script setup lang="ts">
  import type { IVCheckboxGroupProps } from './types';

  defineProps<IVCheckboxGroupProps>();
</script>

<template>
  <div
    class="v-checkbox-group"
    :class="{
      [`v-checkbox-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>
