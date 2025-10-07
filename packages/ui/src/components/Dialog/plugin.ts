import type { Plugin } from 'vue';
import VDialog from './VDialog.vue';

export const DialogPlugin: Plugin = {
  install (app) {
    app.component('VDialog', VDialog);
  }
};
