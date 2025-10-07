<script setup lang="ts">
  import type { IVAffixProps } from './types';
  import { useTemplateRef } from 'vue';

  defineProps<IVAffixProps>();

  const root = useTemplateRef<HTMLDivElement>('root');
  const content = useTemplateRef<HTMLDivElement>('content');
</script>

<template>
  <div
    ref="root"
    class="v-affix"
  >
    <div
      ref="content"
      class="v-affix__content"
    >
      <slot/>
    </div>
  </div>
</template>
