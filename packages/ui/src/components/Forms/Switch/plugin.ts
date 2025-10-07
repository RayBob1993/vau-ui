import type { Plugin } from 'vue';
import VSwitch from './VSwitch.vue';

export const SwitchPlugin: Plugin = {
  install (app) {
    app.component('VSwitch', VSwitch);
  }
};
