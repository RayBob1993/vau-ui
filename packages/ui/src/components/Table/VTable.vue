<script setup lang="ts" generic="T extends IVTableBaseData = IVTableBaseData">
  import type { IVTableProps, IVTableBaseData, IVTableExpose, IVTableEmits, IVTableSlots } from './types';
  import { useTable } from './composables';
  import { TableEmpty, TableBodyCell, TableHeaderCell, TableRow } from './components';
  import { VTableContextKey } from './context';
  import { provide, type InjectionKey } from 'vue';

  const props = defineProps<IVTableProps<T>>();

  defineEmits<IVTableEmits<T>>();
  defineSlots<IVTableSlots<T>>();

  const {
    isHeaderVisible,
    clearSelection,
    getSelectionRows,
    clearSort,
    sort,
    toggleAllSelection
  } = useTable(props);

  provide(VTableContextKey, {
    props
  } as typeof VTableContextKey extends InjectionKey<infer U> ? U : never);

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
      <thead v-if="isHeaderVisible">
        <tr>
          <table-header-cell
            v-for="column in columns"
            :key="column.prop"
          >
            {{ column.title }}
          </table-header-cell>
        </tr>
      </thead>

      <tbody>
        <table-row
          v-for="(row, rowIndex) in data"
          :key="`row-${rowIndex}`"
        >
          <table-body-cell
            v-for="column in columns"
            :key="`row-${rowIndex}-${String(column.prop)}`"
          >
            <slot
              :name="String(column.prop)"
              :row="row"
            >
              {{ row[column.prop] }}
            </slot>
          </table-body-cell>
        </table-row>
      </tbody>
    </table>

    <table-empty v-else>
      <slot name="empty"/>
    </table-empty>
  </div>
</template>
