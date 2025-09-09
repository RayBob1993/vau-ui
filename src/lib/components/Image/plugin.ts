import type { Plugin } from 'vue';
import VImage from './VImage.vue';

export const ImagePlugin: Plugin = {
  install (app) {
    app.component('VImage', VImage);
  }
};
