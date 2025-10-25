import type { Plugin } from 'vue';
import VModal from './VModal.vue';

export const ModalPlugin: Plugin = {
  install (app) {
    app.component('VModal', VModal);
  }
};
