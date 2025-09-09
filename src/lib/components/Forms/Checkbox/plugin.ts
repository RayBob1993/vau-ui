import type { Plugin } from 'vue';
import VCheckbox from './VCheckbox.vue';

export const CheckboxPlugin: Plugin = {
  install (app) {
    app.component('VCheckbox', VCheckbox);
  }
};
