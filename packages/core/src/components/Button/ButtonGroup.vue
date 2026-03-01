<script setup lang="ts">
  import type { ButtonGroupProps } from './types';

  defineProps<ButtonGroupProps>();
</script>

<template>
  <div
    class="button-group"
    :class="{
      [`button-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>
