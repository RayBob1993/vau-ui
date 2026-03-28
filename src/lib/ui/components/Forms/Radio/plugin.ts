import type { Plugin } from 'vue';
import VRadio from './VRadio.vue';
import VRadioGroup from './VRadioGroup.vue';

export const RadioPlugin: Plugin = {
  install (app) {
    app.component('VRadio', VRadio);
  }
};

export const RadioGroupPlugin: Plugin = {
  install (app) {
    app.component('VRadioGroup', VRadioGroup);
  }
};
