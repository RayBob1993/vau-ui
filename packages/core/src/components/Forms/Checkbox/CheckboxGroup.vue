<script setup lang="ts">
  import type { CheckboxGroupProps } from './types';

  defineProps<CheckboxGroupProps>();
</script>

<template>
  <div
    class="checkbox-group"
    :class="{
      [`checkbox-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>
