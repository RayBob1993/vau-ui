import type { Plugin } from 'vue';
import VCollapse from './VCollapse.vue';

export const CollapsePlugin: Plugin = {
  install (app) {
    app.component('VCollapse', VCollapse);
  }
};
