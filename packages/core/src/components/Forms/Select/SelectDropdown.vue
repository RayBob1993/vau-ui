<script setup lang="ts">
  import { useSelectRootContext } from './context';
  import { computed } from 'vue';

  const SelectRootContext = useSelectRootContext();

  const isOpen = computed<boolean>(() => Boolean(SelectRootContext?.isOpen.value));
</script>

<template>
  <div
    v-show="isOpen"
    class="select-dropdown"
  >
    <slot/>
  </div>
</template>
