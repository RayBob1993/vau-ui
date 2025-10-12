import type { Plugin } from 'vue';
import VTable from './VTable.vue';
import VTableColumn from './VTableColumn.vue';

export const TablePlugin: Plugin = {
  install (app) {
    app.component('VTable', VTable);
    app.component('VTableColumn', VTableColumn);
  }
};
