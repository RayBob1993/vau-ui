<script setup lang="ts">
  import type { IVDividerSlots } from './types';
  import { Divider, type DividerProps } from '@vau/core';

  const props = defineProps<DividerProps>();
  const slots = defineSlots<IVDividerSlots>();
</script>

<template>
  <Divider.Root v-bind="props">
    <Divider.Content v-if="slots?.default">
      <slot/>
    </Divider.Content>
  </Divider.Root>
</template>
