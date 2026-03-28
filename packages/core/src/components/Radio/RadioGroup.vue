<script setup lang="ts">
  import type { RadioGroupProps } from './types';

  defineProps<RadioGroupProps>();
</script>

<template>
  <div
    class="radio-group"
    :class="{
      [`radio-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>
