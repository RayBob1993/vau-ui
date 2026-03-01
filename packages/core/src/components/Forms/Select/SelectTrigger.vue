<script setup lang="ts">
  import { useSelectRootContext } from './context';

  const SelectRootContext = useSelectRootContext();

  function handleToggle () {
    SelectRootContext?.toggle();
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
