<script setup lang="ts">
  import { useSelectRootContext } from './context';
  import { computed, toValue } from 'vue';

  const SelectRootContext = useSelectRootContext();

  const isOpen = computed<boolean>(() => Boolean(toValue(SelectRootContext?.isOpen)));
</script>

<template>
  <div
    v-show="isOpen"
    class="select-dropdown"
  >
    <slot/>
  </div>
</template>
