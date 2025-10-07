import type { Plugin } from 'vue';
import VForm from './VForm.vue';

export const FormPlugin: Plugin = {
  install (app) {
    app.component('VForm', VForm);
  }
};
