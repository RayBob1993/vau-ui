<script setup lang="ts">
  import { useSelectRootContext } from './context';

  const Select = useSelectRootContext();

  function handleToggle () {
    Select?.toggleOpen();
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
