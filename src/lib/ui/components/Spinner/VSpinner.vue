<script setup lang="ts">
  import { type SpinnerProps, Spinner } from '@vau/core';

  const props = defineProps<SpinnerProps>();
</script>

<template>
  <Spinner.Root v-bind="props"/>
</template>
