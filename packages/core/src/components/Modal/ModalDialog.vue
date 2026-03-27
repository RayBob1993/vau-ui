<script setup lang="ts">
  import { useModalRootContext } from './context';
  import { useModalDialog } from './composables';

  const modalRootContext = useModalRootContext();

  const { position } = useModalDialog({
    modalRootContext
  });
</script>

<template>
  <div
    class="modal-dialog"
    :class="{
      [`modal-dialog--position-${position}`]: position
    }"
    role="dialog"
    @click.stop
  >
    <slot/>
  </div>
</template>
