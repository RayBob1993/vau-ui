<script lang="ts" setup>
  import type { IVTabProps, IVTabContext, IVTabSlots } from './types';
  import { useTabsContext } from './context';
  import { useTab } from './composables';
  import { onUnmounted, reactive } from 'vue';

  const props = defineProps<IVTabProps>();
  const slots = defineSlots<IVTabSlots>();

  const Tabs = useTabsContext();
  const { id, isActive } = useTab({
    context: Tabs,
    props,
  });

  const tabContext = reactive<IVTabContext>({
    id,
    props,
    slots
  });

  Tabs?.registerTab(tabContext);

  onUnmounted(() => {
    Tabs?.unregisterTab(tabContext);
  });
</script>

<template>
  <div
    v-show="isActive"
    class="v-tab"
    :class="{
      'v-tab--active': isActive
    }"
  >
    <slot :is-active="isActive"/>
  </div>
</template>
