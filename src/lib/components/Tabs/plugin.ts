import type { Plugin } from 'vue';
import VTabs from './VTabs.vue';

export const TabsPlugin: Plugin = {
  install (app) {
    app.component('VTabs', VTabs);
  }
};
