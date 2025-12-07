<script setup lang="ts">
  import type { IVButtonGroupProps } from './types';

  defineProps<IVButtonGroupProps>();
</script>

<template>
  <div
    class="v-button-group"
    :class="{
      [`v-button-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>
