<script setup lang="ts">
  import type { IVAccordionItemProps, IVAccordionItemSlots, IVAccordionModelValue } from './types';
  import { useAccordionContext } from './context';
  import { computed } from 'vue';

  const props = defineProps<IVAccordionItemProps>();

  defineSlots<IVAccordionItemSlots>();

  const Accordion = useAccordionContext();

  const modelValue = computed<IVAccordionModelValue>(() => Accordion?.modelValue.value);
  const isMultiple = computed<boolean>(() => Boolean(Accordion?.props.multiple));

  const isActive = computed<boolean>(() => {
    return isMultiple.value && Array.isArray(modelValue.value)
      ? modelValue.value.includes(props.value)
      : modelValue.value === props.value;
  });

  function handleToggle () {
    const changeValue = modelValue.value === props.value ? undefined : props.value;

    Accordion?.handleChange(changeValue);
  }
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

    <div class="v-accordion-item__content">
      <slot/>
    </div>
  </div>
</template>
