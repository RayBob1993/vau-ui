import type { Plugin } from 'vue';
import VToast from './VToast.vue';

export const ToastPlugin: Plugin = {
  install (app) {
    app.component('VToast', VToast);
  }
};
