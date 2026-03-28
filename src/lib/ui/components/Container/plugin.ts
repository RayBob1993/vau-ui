import type { Plugin } from 'vue';
import VContainer from './VContainer.vue';

export const ContainerPlugin: Plugin = {
  install (app) {
    app.component('VContainer', VContainer);
  }
};
