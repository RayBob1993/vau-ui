import type { Plugin } from 'vue';
import VInputRange from './VInputRange.vue';

export const InputRangePlugin: Plugin = {
  install (app) {
    app.component('VInputRange', VInputRange);
  }
};
