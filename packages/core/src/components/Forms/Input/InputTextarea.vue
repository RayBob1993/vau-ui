<script setup lang="ts">
  import { useInputBase, useInputTextarea } from './composables';
  import { useInputRootContext } from './context';

  const Input = useInputRootContext();

  const { modelValue, listeners } = useInputBase({
    context: Input
  });

  const { props } = useInputTextarea({
    context: Input
  });
</script>

<template>
  <textarea
    v-model="modelValue"
    :readonly="props.readonly"
    :disabled="props.disabled"
    :autocomplete="props.autocomplete"
    :rows="props.rows"
    :cols="props.cols"
    :placeholder="props.placeholder"
    class="input-textarea"
    v-on="listeners"
  />
</template>
