<script setup lang="ts">
  import type { IVTableColumnProps } from './types';

  defineProps<IVTableColumnProps>();
</script>

<template>
  <td class="v-table-column">
    <slot/>
  </td>
</template>
