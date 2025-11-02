<script setup lang="ts">
  import type { IVRadioGroupProps } from './types';

  defineProps<IVRadioGroupProps>();
</script>

<template>
  <div
    class="v-radio-group"
    :class="{
      [`v-radio-group--direction-${direction}`]: direction
    }"
  >
    <slot/>
  </div>
</template>
