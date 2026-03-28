import type { Plugin } from 'vue';
import VInputCode from './VInputCode.vue';

export const InputCodePlugin: Plugin = {
  install (app) {
    app.component('VInputCode', VInputCode);
  }
};
