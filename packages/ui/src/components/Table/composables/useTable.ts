import type { IVTableProps } from '../types';
import { computed } from 'vue';

export function useTable (props: IVTableProps) {
  const isHeaderVisible = computed<boolean>(() => props.columns.some(column => Boolean(column.title)));

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

  return {
    isHeaderVisible,
    clearSelection,
    getSelectionRows,
    clearSort,
    sort,
    toggleAllSelection
  };
}
