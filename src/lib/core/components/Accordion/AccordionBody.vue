<script setup lang="ts">
  import { useAccordionItemContext } from './context';
  import { computed, toValue } from 'vue';

  const accordionItemContext = useAccordionItemContext();

  const isActive = computed<boolean>(() => Boolean(toValue(accordionItemContext?.isActive)));
</script>

<template>
  <div
    v-show="isActive"
    class="accordion-body"
    role="group"
    :aria-hidden="!isActive"
  >
    <div class="accordion-body__content">
      <slot :is-active="isActive"/>
    </div>
  </div>
</template>
