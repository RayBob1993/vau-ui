import type { IVTableProps, IVTableBaseData, IVTableSortDirection, IVTableSortState } from '../types';
import { computed, ref } from 'vue';

export function useTable<T extends IVTableBaseData = IVTableBaseData> (props: IVTableProps<T>) {
  const selectedRows = ref<Array<T>>([]);

  const sortState = ref<IVTableSortState<T>>({
    prop: null,
    order: null
  });

  const isHeaderVisible = computed<boolean>(() => props.columns.some(column => Boolean(column.title)));

  function clearSelection () {
    selectedRows.value = [];
  }

  function getSelectionRows () {
    return selectedRows.value;
  }

  function clearSort () {
    sortState.value = {
      prop: null,
      order: null
    };
  }

  function sort (prop: keyof T, order: IVTableSortDirection) {
    sortState.value = {
      prop,
      order
    };
  }

  function toggleAllSelection () {
    if (selectedRows.value.length === props.data.length) {
      clearSelection();
    } else {
      selectedRows.value = [...props.data];
    }
  }

  return {
    isHeaderVisible,
    clearSelection,
    getSelectionRows,
    clearSort,
    sort,
    toggleAllSelection
  };
}
