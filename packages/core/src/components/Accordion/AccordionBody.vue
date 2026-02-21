<script setup lang="ts">
  import { useAccordionItemContext } from './context';
  import { computed, toValue } from 'vue';

  const AccordionItem = useAccordionItemContext();

  const isActive = computed<boolean>(() => Boolean(toValue(AccordionItem?.isActive)));
</script>

<template>
  <div
    v-show="isActive"
    class="accordion-body"
    role="region"
  >
    <div class="accordion-body__content">
      <slot/>
    </div>
  </div>
</template>
