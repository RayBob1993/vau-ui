<script setup lang="ts">
  import { useAccordionContext } from './context';
  import { useAccordionTrigger } from './composables';

  const { accordionRootContext, accordionItemContext } = useAccordionContext();

  const { isDisabled, isActive, handleToggle } = useAccordionTrigger({
    accordionRootContext,
    accordionItemContext
  });
</script>

<template>
  <button
    type="button"
    :disabled="isDisabled"
    class="accordion-trigger"
    tabindex="0"
    :aria-expanded="isActive"
    @click="handleToggle"
  >
    <slot/>
  </button>
</template>
