import type { Plugin } from 'vue';
import VProgress from './VProgress.vue';

export const ProgressPlugin: Plugin = {
  install (app) {
    app.component('VProgress', VProgress);
  }
};
