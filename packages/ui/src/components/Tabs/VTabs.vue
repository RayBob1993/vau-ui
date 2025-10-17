<script lang="ts" setup>
  import type { IVTabsProps, IVTabsEmits, IVTabsModelValue, IVTabContext } from './types';
  import { VTabsContextKey } from './context';
  import { provide, ref } from 'vue';

  const props = defineProps<IVTabsProps>();

  const emit = defineEmits<IVTabsEmits>();

  const modelValue = defineModel<IVTabsModelValue>('value', {
    required: true
  });

  const tabs = ref<Array<IVTabContext>>([]);

  function handleChange (value: IVTabsModelValue) {
    modelValue.value = value;

    emit('change', value);
  }

  function registerTab (newTab: IVTabContext) {
    if (!tabs.value.find(tab => tab.id === newTab.id)) {
      tabs.value.push(newTab);
    }
  }

  function unregisterTab (oldTab: IVTabContext) {
    tabs.value = tabs.value.filter(tab => tab.id !== oldTab.id);
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
