import type { Plugin } from 'vue';
import VDatepicker from './VDatepicker.vue';

export const DatepickerPlugin: Plugin = {
  install (app) {
    app.component('VDatepicker', VDatepicker);
  }
};
