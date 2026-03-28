import type { Plugin } from 'vue';
import VRow from './VRow.vue';

export const RowPlugin: Plugin = {
  install (app) {
    app.component('VRow', VRow);
  }
};
