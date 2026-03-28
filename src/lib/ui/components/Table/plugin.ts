import type { Plugin } from 'vue';
import VTable from './VTable.vue';

export const TablePlugin: Plugin = {
  install (app) {
    app.component('VTable', VTable);
  }
};
