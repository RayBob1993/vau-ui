import type { Plugin } from 'vue';
import VInputFile from './VInputFile.vue';

export const InputFilePlugin: Plugin = {
  install (app) {
    app.component('VInputFile', VInputFile);
  }
};
