<script setup lang="ts">
  import { useInputBase, useInputNative } from './composables';
  import { useInputRootContext } from './context';

  const InputRootContext = useInputRootContext();

  const { modelValue, listeners } = useInputBase({
    inputRootContext: InputRootContext
  });

  const { props } = useInputNative({
    inputRootContext: InputRootContext
  });
</script>

<template>
  <input
    v-model="modelValue"
    :type="props.nativeType"
    :inputmode="props.inputMode"
    :readonly="props.readonly"
    :disabled="props.disabled"
    :autocomplete="props.autocomplete"
    :placeholder="props.placeholder"
    class="input-native"
    v-on="listeners"
  >
</template>
