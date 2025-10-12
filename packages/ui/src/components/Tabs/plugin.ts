import type { Plugin } from 'vue';
import VTabs from './VTabs.vue';
import VTab from './VTab.vue';

export const TabsPlugin: Plugin = {
  install (app) {
    app.component('VTabs', VTabs);
    app.component('VTab', VTab);
  }
};
