<script setup lang="ts">
  import { Button, type ButtonProps } from '@vau/core';

  const props = withDefaults(defineProps<ButtonProps>(), {
    as: 'button',
    type: 'button'
  });
</script>

<template>
  <Button.Root v-bind="props">
    <slot/>
  </Button.Root>
</template>
