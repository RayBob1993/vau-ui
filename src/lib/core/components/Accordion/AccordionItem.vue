<script setup lang="ts">
  import type { AccordionItemProps, AccordionItemSlots } from './types';
  import { AccordionItemContextKey, useAccordionRootContext } from './context';
  import { useAccordionItem } from './composables';
  import { provide } from 'vue';

  const props = defineProps<AccordionItemProps>();

  defineSlots<AccordionItemSlots>();

  const accordionRootContext = useAccordionRootContext();

  const { isActive } = useAccordionItem({
    accordionRootContext,
    props: () => props
  });

  provide(AccordionItemContextKey, {
    props: () => props,
    isActive: () => isActive.value
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
