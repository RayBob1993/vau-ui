<script lang="ts" setup>
  import type { IVCheckboxProps } from './types';

  defineProps<IVCheckboxProps>();
</script>

<template>
  <label class="v-checkbox">
    <input
      type="checkbox"
      class="v-checkbox__native"
    >

    <span class="v-checkbox__label">
      <slot/>
    </span>
  </label>
</template>
