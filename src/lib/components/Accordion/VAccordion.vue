<script setup lang="ts">
  import type { IVAccordionProps, IVAccordionEmits, IVAccordionModelValue, IVAccordionValue } from './types';
  import { VAccordionContextKey } from './context';
  import { provide } from 'vue';

  const props = defineProps<IVAccordionProps>();
  const emit = defineEmits<IVAccordionEmits>();

  const modelValue = defineModel<IVAccordionModelValue>('active',{
    required: true,
  });

  function handleChange (value: IVAccordionValue | undefined) {
    if (props.multiple && Array.isArray(modelValue.value)) {
      if (!value) {
        return;
      }

      const items = new Set(modelValue.value);

      if (items.has(value)) {
        items.delete(value);
      } else {
        items.add(value);
      }

      modelValue.value = [...items];
    } else {
      modelValue.value = value;
    }

    emit('change', value);
  }

  provide(VAccordionContextKey, {
    props,
    modelValue,
    handleChange
  });
</script>

<template>
  <div class="v-accordion">
    <slot/>
  </div>
</template>
