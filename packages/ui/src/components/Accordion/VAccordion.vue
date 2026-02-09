<script setup lang="ts">
  import type { IVAccordionProps, IVAccordionEmits, IVAccordionModelValue } from './types';
  import { VAccordionContextKey } from './context';
  import { useAccordion } from './composables';
  import { provide } from 'vue';

  const props = defineProps<IVAccordionProps>();
  const emit = defineEmits<IVAccordionEmits>();

  const modelValue = defineModel<IVAccordionModelValue>({
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

  provide(VAccordionContextKey, {
    props,
    modelValue,
    handleChange
  });
</script>

<template>
  <div
    class="v-accordion"
    :class="{
      [`v-accordion--size-${size}`]: size,
      [`v-accordion--theme-${theme}`]: theme
    }"
  >
    <slot/>
  </div>
</template>
