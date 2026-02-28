<script setup lang="ts">
  import type { AccordionItemProps, AccordionItemSlots } from './types';
  import { AccordionItemContextKey, useAccordionRootContext } from './context';
  import { useAccordionItem } from './composables';
  import { provide } from 'vue';

  const props = defineProps<AccordionItemProps>();

  defineSlots<AccordionItemSlots>();

  const Accordion = useAccordionRootContext();

  const { isActive } = useAccordionItem({
    context: Accordion,
    props: () => props
  });

  provide(AccordionItemContextKey, {
    props,
    isActive
  });
</script>

<template>
  <div
    class="accordion-item"
    :class="{
      'accordion-item--open': isActive,
      'accordion-item--disabled': disabled
    }"
  >
    <slot :is-active="isActive"/>
  </div>
</template>
