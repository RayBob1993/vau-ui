import type { Plugin } from 'vue';
import VInputMask from './VInputMask.vue';

export const InputMaskPlugin: Plugin = {
  install (app) {
    app.component('VInputMask', VInputMask);
  }
};
