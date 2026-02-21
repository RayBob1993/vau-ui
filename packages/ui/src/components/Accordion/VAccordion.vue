<script setup lang="ts">
  import { Accordion, type AccordionProps, type AccordionEmits, type AccordionModelValue } from '@vau/core';

  const props = defineProps<AccordionProps>();
  const emit = defineEmits<AccordionEmits>();

  const modelValue = defineModel<AccordionModelValue>({
    required: true,
  });
</script>

<template>
  <Accordion.Root
    v-bind="props"
    v-model="modelValue"
    v-on="emit"
  >
    <slot/>
  </Accordion.Root>
</template>
