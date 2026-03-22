import type { Plugin } from 'vue';
import VLayout from './VLayout.vue';

export const LayoutPlugin: Plugin = {
  install (app) {
    app.component('VLayout', VLayout);
  }
};
