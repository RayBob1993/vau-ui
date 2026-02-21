<script setup lang="ts">
  import type { AccordionEmits, AccordionModelValue, AccordionProps } from './types';
  import { useAccordion } from './composables';
  import { AccordionContextKey } from './context';
  import { provide } from 'vue';

  const props = defineProps<AccordionProps>();
  const emit = defineEmits<AccordionEmits>();

  const modelValue = defineModel<AccordionModelValue>({
    required: true,
  });

  const { handleChange } = useAccordion({
    props,
    modelValue: () => modelValue.value,
    onChange: value => emit('change', value),
    onChangeModel: value => {
      modelValue.value = value;
    }
  });

  provide(AccordionContextKey, {
    props,
    modelValue,
    handleChange
  });
</script>

<template>
  <div
    class="accordion"
    :class="{
      [`accordion--size-${size}`]: size,
      [`accordion--theme-${theme}`]: theme
    }"
  >
    <slot/>
  </div>
</template>
