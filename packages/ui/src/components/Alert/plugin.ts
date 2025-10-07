import type { Plugin } from 'vue';
import VAlert from './VAlert.vue';

export const AlertPlugin: Plugin = {
  install (app) {
    app.component('VAlert', VAlert);
  }
};
