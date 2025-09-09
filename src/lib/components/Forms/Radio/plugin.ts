import type { Plugin } from 'vue';
import VRadio from './VRadio.vue';

export const RadioPlugin: Plugin = {
  install (app) {
    app.component('VRadio', VRadio);
  }
};
