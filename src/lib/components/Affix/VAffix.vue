<script setup lang="ts">
  import type { IVAffixProps } from './types';
  import { shallowRef } from 'vue';

  defineProps<IVAffixProps>();

  const root = shallowRef<HTMLDivElement>();
  const content = shallowRef<HTMLDivElement>();
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
