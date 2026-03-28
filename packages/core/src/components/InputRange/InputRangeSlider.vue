<script setup lang="ts">
  import { useInputRangeSlider } from './composables';
  import { useInputRangeRootContext } from './context';

  const inputRangeRootContext = useInputRangeRootContext();

  const { isDisabled } = useInputRangeSlider({
    inputRangeRootContext
  });
</script>

<template>
  <div
    class="input-range-slider"
    :aria-disabled="isDisabled"
  />
</template>
