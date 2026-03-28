<script setup lang="ts">
  import type { IVProgressProps } from './types';

  withDefaults(defineProps<IVProgressProps>(), {
    showValue: true
  });
</script>

<template>
  <div
    class="v-progress"
    role="progressbar"
    :class="{
      'v-progress--indeterminate': indeterminate,
      [`v-progress--size-${size}`]: size,
      [`v-progress--theme-${theme}`]: theme
    }"
  >
    <div class="v-progress__value">
      <div
        v-if="showValue"
        class="v-progress__label"
      >
        <slot/>
      </div>
    </div>
  </div>
</template>
