<script lang="ts" setup>
  import type { IVInputRadioProps } from './types';

  defineProps<IVInputRadioProps>();
</script>

<template>
  <label class="v-radio">
    <input
      type="radio"
      class="v-radio__native"
    >

    <span class="v-radio__label">
      <slot/>
    </span>
  </label>
</template>
