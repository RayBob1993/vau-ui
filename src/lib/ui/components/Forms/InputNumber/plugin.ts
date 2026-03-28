import type { Plugin } from 'vue';
import VInputNumber from './VInputNumber.vue';

export const InputNumberPlugin: Plugin = {
  install (app) {
    app.component('VInputNumber', VInputNumber);
  }
};
