<script lang="ts" setup>
  import type { IVTabProps, IVTabContext, IVTabSlots } from './types';
  import { useTabsContext } from './context';
  import { onUnmounted, computed, reactive, useId } from 'vue';

  const props = defineProps<IVTabProps>();
  const slots = defineSlots<IVTabSlots>();

  const Tabs = useTabsContext();
  const id = useId();
  const isActive = computed<boolean>(() => Tabs?.modelValue.value === props.value);

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
