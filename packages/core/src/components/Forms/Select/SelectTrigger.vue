<script setup lang="ts">
  import type { SelectTriggerSlots } from './types';
  import { useSelectRootContext } from './context';
  import { useSelectTrigger } from './composables';

  defineSlots<SelectTriggerSlots>();

  const selectRootContext = useSelectRootContext();

  const { open, close, toggle } = useSelectTrigger({
    selectRootContext
  });
</script>

<template>
  <slot
    :open="open"
    :close="close"
    :toggle="toggle"
  />
</template>
