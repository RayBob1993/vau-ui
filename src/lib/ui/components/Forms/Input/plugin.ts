import type { Plugin } from 'vue';
import VInput from './VInput.vue';

export const InputPlugin: Plugin = {
  install (app) {
    app.component('VInput', VInput);
  }
};
