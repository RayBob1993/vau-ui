<script lang="ts" setup>
  import type { IVTabsProps, IVTabsEmits } from './types';

  defineProps<IVTabsProps>();
  defineEmits<IVTabsEmits>();
</script>

<template>
  <div class="v-tabs">
    <div class="v-tabs__content">
      <slot/>
    </div>
  </div>
</template>
