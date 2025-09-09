import type { Plugin } from 'vue';
import VPlaceholder from './VPlaceholder.vue';

export const PlaceholderPlugin: Plugin = {
  install (app) {
    app.component('VPlaceholder', VPlaceholder);
  }
};
