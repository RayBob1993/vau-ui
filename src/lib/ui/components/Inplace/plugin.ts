import type { Plugin } from 'vue';
import VInplace from './VInplace.vue';

export const InplacePlugin: Plugin = {
  install (app) {
    app.component('VInplace', VInplace);
  }
};
