<script lang="ts" setup>
  import type { IVFormItemProps } from './types';
  import { useTemplateRef, defineAsyncComponent } from 'vue';

  defineProps<IVFormItemProps>();

  const VFormItemErrors = defineAsyncComponent(() => import('./VFormItemErrors.vue'));

  const root = useTemplateRef<HTMLDivElement>('root');
</script>

<template>
  <div
    ref="root"
    class="v-form-item"
  >
    <slot/>

    <VFormItemErrors :errors="[]"/>
  </div>
</template>
