<script setup lang="ts">
  import { useInputRangeSlider } from './composables';
  import { useInputRangeRootContext } from './context';

  const InputRangeRootContext = useInputRangeRootContext();

  const {} = useInputRangeSlider({
    inputRangeRootContext: InputRangeRootContext
  });
</script>

<template>
  <div class="input-range-slider"/>
</template>
