<script lang="ts" setup>
  import { Switch, type SwitchProps, type SwitchModelValue } from '@vau/core';

  const props = defineProps<SwitchProps>();

  const modelValue = defineModel<SwitchModelValue>({
    required: true,
  });
</script>

<template>
  <Switch.Root
    v-bind="props"
    v-model="modelValue"
  >
    <Switch.Indicator/>

    <Switch.Title>
      <slot/>
    </Switch.Title>
  </Switch.Root>
</template>
