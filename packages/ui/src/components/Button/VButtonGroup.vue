<script setup lang="ts">
  import { Button, type ButtonGroupProps } from '@vau/core';

  const props = defineProps<ButtonGroupProps>();
</script>

<template>
  <Button.Group v-bind="props">
    <slot/>
  </Button.Group>
</template>
