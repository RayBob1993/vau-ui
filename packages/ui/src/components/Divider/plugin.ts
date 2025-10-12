import type { Plugin } from 'vue';
import VDivider from './VDivider.vue';

export const DividerPlugin: Plugin = {
  install (app) {
    app.component('VDivider', VDivider);
  }
};
