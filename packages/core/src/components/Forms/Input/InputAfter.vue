<script lang="ts" setup>
  import { useInputRootContext } from './context';
  import { useInputAfter } from './composables';

  const inputRootContext = useInputRootContext();

  const { isClearable, handleClear } = useInputAfter({
    inputRootContext
  });
</script>

<template>
  <div class="input-after">
    <slot/>

    <button
      v-if="isClearable"
      type="button"
      @click="handleClear"
    >
      ×
    </button>
  </div>
</template>
