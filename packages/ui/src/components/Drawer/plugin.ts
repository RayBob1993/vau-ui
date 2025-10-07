import type { Plugin } from 'vue';
import VDrawer from './VDrawer.vue';

export const DrawerPlugin: Plugin = {
  install (app) {
    app.component('VDrawer', VDrawer);
  }
};
