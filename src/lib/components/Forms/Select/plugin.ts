import type { Plugin } from 'vue';
import VSelect from './VSelect.vue';

export const SelectPlugin: Plugin = {
  install (app) {
    app.component('VSelect', VSelect);
  }
};
