<script lang="ts" setup>
  import type { RowProps } from './types';
  import { Flex } from '../Flex';

  const {
    guttersY = false,
    guttersX = true,
    wrap = true,
    ...flexProps
  } = defineProps<RowProps>();
</script>

<template>
  <Flex.Root
    v-bind="flexProps"
    :wrap="wrap"
    class="row"
    :class="{
      'row--gutters-x': guttersX,
      'row--gutters-y': guttersY
    }"
  >
    <slot/>
  </Flex.Root>
</template>
