<script setup lang="ts">
  import { useModalClose } from './composables';
  import { useModalRootContext } from './context';

  const modalRootContext = useModalRootContext();

  const { close } = useModalClose({
    modalRootContext
  });
</script>

<template>
  <button
    type="button"
    class="modal-close"
    @click="close"
  >
    <slot/>
  </button>
</template>
