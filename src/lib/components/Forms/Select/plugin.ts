import type { Plugin } from 'vue';
import VSelect from './VSelect.vue';
import VOption from './VOption.vue';

export const SelectPlugin: Plugin = {
  install (app) {
    app.component('VSelect', VSelect);
    app.component('VOption', VOption);
  }
};
