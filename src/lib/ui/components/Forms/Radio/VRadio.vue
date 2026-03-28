<script lang="ts" setup>
  import { Radio, type RadioProps, type RadioModelValue } from '@vau/core';

  const props = defineProps<RadioProps>();

  const modelValue = defineModel<RadioModelValue>({
    required: true
  });
</script>

<template>
  <Radio.Root
    v-bind="props"
    v-model="modelValue"
  >
    <Radio.Indicator/>

    <Radio.Title>
      <slot/>
    </Radio.Title>
  </Radio.Root>
</template>
