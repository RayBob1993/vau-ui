<script setup lang="ts" generic="T extends IVTableBaseData">
  import type { IVTableProps, IVTableBaseData, IVTableExpose, IVTableEmits, IVTableSlots } from './types';

  defineProps<IVTableProps<T>>();
  defineEmits<IVTableEmits>();
  defineSlots<IVTableSlots>();

  function clearSelection () {

  }

  function getSelectionRows () {

  }

  function clearSort () {

  }

  function sort () {

  }

  function toggleAllSelection () {

  }


  defineExpose<IVTableExpose>({
    clearSelection,
    getSelectionRows,
    clearSort,
    sort,
    toggleAllSelection
  });
</script>

<template>
  <div class="v-table">
    <table
      v-if="data.length"
      class="v-table__native"
    >
      <slot/>
    </table>

    <div class="v-table__empty">
      <slot name="empty"/>
    </div>
  </div>
</template>
