<script setup lang="ts">
  import { useAccordionContext } from './context';
  import { useAccordionTrigger } from './composables';

  const { accordionRootContext, accordionItemContext } = useAccordionContext();

  const { isDisabled, handleToggle } = useAccordionTrigger({
    accordionRootContext,
    accordionItemContext
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
