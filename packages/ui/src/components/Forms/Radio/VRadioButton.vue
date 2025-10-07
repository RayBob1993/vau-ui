<script lang="ts" setup>
  import type { IVInputRadioProps } from './types';

  defineProps<IVInputRadioProps>();
</script>

<template>
  <label class="v-radio-button">
    <input
      type="radio"
      class="v-radio-button__native"
    >

    <span class="v-radio-button__label">
      <slot/>
    </span>
  </label>
</template>
