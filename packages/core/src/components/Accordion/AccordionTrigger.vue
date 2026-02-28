<script setup lang="ts">
  import { useAccordionRootContext, useAccordionItemContext } from './context';
  import { computed } from 'vue';

  const Accordion = useAccordionRootContext();
  const AccordionItem = useAccordionItemContext();

  const isDisabled = computed<boolean>(() => Boolean(AccordionItem?.props.disabled));

  function handleToggle () {
    Accordion?.handleChange(AccordionItem?.props.value);
  }
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
