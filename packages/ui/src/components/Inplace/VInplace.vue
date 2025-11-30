<script setup lang="ts">
  import type { IVInplaceSlots, IVInplaceEmits } from './types';
  import { useInplace } from './composables';

  const emit = defineEmits<IVInplaceEmits>();

  defineSlots<IVInplaceSlots>();

  const { isVisible, handleOpen, handleClose } = useInplace({
    onOpen: () => emit('open'),
    onClose: () => emit('close')
  });
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
