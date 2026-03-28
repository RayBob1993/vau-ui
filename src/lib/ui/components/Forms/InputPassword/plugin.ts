import type { Plugin } from 'vue';
import VInputPassword from './VInputPassword.vue';

export const InputPasswordPlugin: Plugin = {
  install (app) {
    app.component('VInputPassword', VInputPassword);
  }
};
