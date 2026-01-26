<script setup lang="ts">
  import type { IVAccordionItemProps, IVAccordionItemSlots } from './types';
  import { useAccordionItem } from './composables';
  import { useAccordionContext } from './context';

  const props = defineProps<IVAccordionItemProps>();

  defineSlots<IVAccordionItemSlots>();

  const Accordion = useAccordionContext();

  const { isActive, tabIndex, handleToggle } = useAccordionItem({
    context: Accordion,
    props
  });
</script>

<template>
  <div
    class="v-accordion-item"
    :class="{
      'v-accordion-item--active': isActive,
      'v-accordion-item--disabled': disabled
    }"
  >
    <button
      class="v-accordion-item__header"
      :disabled="disabled"
      type="button"
      :aria-expanded="isActive"
      :tabindex="tabIndex"
      @click="handleToggle"
    >
      <slot
        name="header"
        :is-active="isActive"
      >
        <span class="v-accordion-item__header-title">
          {{ title }}
        </span>
      </slot>

      <span class="v-accordion-item__header-icon">
        <slot
          name="icon"
          :is-active="isActive"
        >
          {{ isActive ? '-' : '+' }}
        </slot>
      </span>
    </button>

    <div
      v-show="isActive"
      class="v-accordion-item__content"
      role="region"
      :aria-hidden="!isActive"
    >
      <slot/>
    </div>
  </div>
</template>
