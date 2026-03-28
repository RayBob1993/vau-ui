import type { Plugin } from 'vue';
import VScrollbar from './VScrollbar.vue';

export const ScrollbarPlugin: Plugin = {
  install (app) {
    app.component('VScrollbar', VScrollbar);
  }
};
