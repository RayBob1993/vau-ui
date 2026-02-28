<script setup lang="ts">
  import type { AccordionEmits, AccordionModelValue, AccordionProps } from './types';
  import { useAccordionRoot } from './composables';
  import { AccordionRootContextKey } from './context';
  import { provide } from 'vue';

  const props = defineProps<AccordionProps>();
  const emit = defineEmits<AccordionEmits>();

  const modelValue = defineModel<AccordionModelValue>({
    required: true,
  });

  const { setModelValue } = useAccordionRoot({
    props: () => props,
    modelValue: () => modelValue.value,
    onChange: value => emit('change', value),
    onChangeModel: value => {
      modelValue.value = value;
    }
  });

  provide(AccordionRootContextKey, {
    props: () => props,
    modelValue: () => modelValue.value,
    setModelValue
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
