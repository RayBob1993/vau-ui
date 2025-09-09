import type { Plugin } from 'vue';
import VConfigProvider from './VConfigProvider.vue';

export const ConfigProviderPlugin: Plugin = {
  install (app) {
    app.component('VConfigProvider', VConfigProvider);
  }
};
