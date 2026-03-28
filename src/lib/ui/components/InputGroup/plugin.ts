import type { Plugin } from 'vue';
import VInputGroup from './VInputGroup.vue';
import VInputGroupAddon from './VInputGroupAddon.vue';

export const InputGroupPlugin: Plugin = {
  install (app) {
    app.component('VInputGroup', VInputGroup);
    app.component('VInputGroupAddon', VInputGroupAddon);
  }
};
