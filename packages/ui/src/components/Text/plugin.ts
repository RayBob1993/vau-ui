import type { Plugin } from 'vue';
import VText from './VText.vue';

export const TextPlugin: Plugin = {
  install (app) {
    app.component('VText', VText);
  }
};
