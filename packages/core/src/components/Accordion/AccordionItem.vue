<script setup lang="ts">
  import type { AccordionItemProps, AccordionItemSlots } from './types';
  import { AccordionItemContextKey, useAccordionContext } from './context';
  import { useAccordionItem } from './composables';
  import { provide } from 'vue';

  const props = defineProps<AccordionItemProps>();

  defineSlots<AccordionItemSlots>();

  const Accordion = useAccordionContext();

  const { isActive } = useAccordionItem({
    context: Accordion,
    props
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
      'accordion-item--active': isActive,
      'accordion-item--disabled': disabled
    }"
  >
    <slot :is-active="isActive"/>
  </div>
</template>
