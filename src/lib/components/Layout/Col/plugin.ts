import type { Plugin } from 'vue';
import VCol from './VCol.vue';

export const ColPlugin: Plugin = {
  install (app) {
    app.component('VCol', VCol);
  }
};
