<script setup lang="ts">
  import { useSelectRootContext } from './context';

  const SelectRootContext = useSelectRootContext();

  function handleToggle () {
    SelectRootContext?.toggleOpen();
  }
</script>

<template>
  <button
    type="button"
    class="select-trigger"
    @click="handleToggle"
  >
    <slot/>
  </button>
</template>
