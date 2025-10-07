import type { Plugin } from 'vue';
import VConfirm from './VConfirm.vue';

export const ConfirmPlugin: Plugin = {
  install (app) {
    app.component('VConfirm', VConfirm);
  }
};
