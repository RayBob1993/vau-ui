<script setup lang="ts">
  import { useAccordionContext } from './context';
  import { useAccordionTrigger } from './composables';

  const { AccordionRootContext, AccordionItemContext } = useAccordionContext();

  const { isDisabled, handleToggle } = useAccordionTrigger({
    accordionRootContext: AccordionRootContext,
    accordionItemContext: AccordionItemContext
  });
</script>

<template>
  <button
    type="button"
    :disabled="isDisabled"
    class="v-accordion-trigger"
    @click="handleToggle"
  >
    <slot/>
  </button>
</template>
