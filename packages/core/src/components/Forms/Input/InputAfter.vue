<script lang="ts" setup>
  import { useInputRootContext } from './context';
  import { computed, toValue } from 'vue';

  const InputRootContext = useInputRootContext();

  const isClearable = computed<boolean>(() => Boolean(toValue(InputRootContext?.props)?.clearable));

  function handleClear () {
    InputRootContext?.reset();
  }
</script>

<template>
  <div class="input-after">
    <slot/>

    <button
      v-if="isClearable"
      type="button"
      @click="handleClear"
    >
      x
    </button>
  </div>
</template>
