import type { Plugin } from 'vue';
import VButton from './VButton.vue';

export const ButtonPlugin: Plugin = {
  install (app) {
    app.component('VButton', VButton);
  }
};
