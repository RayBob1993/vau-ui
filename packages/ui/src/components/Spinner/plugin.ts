import type { Plugin } from 'vue';
import VSpinner from './VSpinner.vue';

export const SpinnerPlugin: Plugin = {
  install (app) {
    app.component('VSpinner', VSpinner);
  }
};
