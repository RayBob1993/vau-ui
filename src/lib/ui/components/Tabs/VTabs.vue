<script lang="ts" setup>
  import type { IVTabsProps, IVTabsEmits, IVTabsModelValue } from './types';
  import { VTabsContextKey } from './context';
  import { useTabs } from './composables';
  import { provide } from 'vue';

  const props = defineProps<IVTabsProps>();

  const emit = defineEmits<IVTabsEmits>();

  const modelValue = defineModel<IVTabsModelValue>({
    required: true
  });

  const {
    tabs,
    registerTab,
    unregisterTab
  } = useTabs();

  function handleChange (value: IVTabsModelValue) {
    modelValue.value = value;

    emit('change', value);
  }

  provide(VTabsContextKey, {
    props,
    modelValue,
    tabs,
    handleChange,
    registerTab,
    unregisterTab
  });
</script>

<template>
  <div class="v-tabs">
    <div class="v-tabs__content">
      <slot/>
    </div>
  </div>
</template>
