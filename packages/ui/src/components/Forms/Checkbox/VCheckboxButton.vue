<script lang="ts" setup>
  import type { IVCheckboxProps } from './types';

  defineProps<IVCheckboxProps>();
</script>

<template>
  <label class="v-checkbox-button">
    <input
      type="checkbox"
      class="v-checkbox-button__native"
    >

    <span class="v-checkbox-button__label">
      <slot/>
    </span>
  </label>
</template>
