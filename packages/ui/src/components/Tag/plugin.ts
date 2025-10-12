import type { Plugin } from 'vue';
import VTag from './VTag.vue';

export const TagPlugin: Plugin = {
  install (app) {
    app.component('VTag', VTag);
  }
};
