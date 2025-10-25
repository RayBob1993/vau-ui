<script setup lang="ts">
  import type { IVInplaceSlots, IVInplaceEmits } from './types';
  import { useToggle } from '@vau/core';

  const emit = defineEmits<IVInplaceEmits>();

  defineSlots<IVInplaceSlots>();

  const [isVisible, setVisible] = useToggle();

  function handleOpen () {
    setVisible(true);
    emit('open');
  }

  function handleClose () {
    setVisible(false);
    emit('close');
  }
</script>

<template>
  <slot
    v-if="!isVisible"
    name="display"
    :open="handleOpen"
  />

  <slot
    v-else
    name="content"
    :close="handleClose"
  />
</template>
