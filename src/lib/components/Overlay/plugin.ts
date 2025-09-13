import type { Plugin } from 'vue';
import VOverlay from './VOverlay.vue';

export const OverlayPlugin: Plugin = {
  install (app) {
    app.component('VOverlay', VOverlay);
  }
};
