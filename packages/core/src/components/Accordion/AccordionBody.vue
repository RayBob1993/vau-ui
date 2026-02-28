<script setup lang="ts">
  import { useAccordionItemContext } from './context';
  import { computed, toValue } from 'vue';

  const ItemContext = useAccordionItemContext();

  const isActive = computed<boolean>(() => Boolean(toValue(ItemContext?.isActive)));
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
