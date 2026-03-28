import { defineAsyncComponent } from 'vue';

export const TableRow = defineAsyncComponent(() => import('./TableRow.vue'));
export const TableEmpty = defineAsyncComponent(() => import('./TableEmpty.vue'));
export const TableBodyCell = defineAsyncComponent(() => import('./TableBodyCell.vue'));
export const TableHeaderCell = defineAsyncComponent(() => import('./TableHeaderCell.vue'));
