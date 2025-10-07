import type { Plugin } from 'vue';
import VFlex from './VFlex.vue';

export const FlexPlugin: Plugin = {
  install (app) {
    app.component('VFlex', VFlex);
  }
};
