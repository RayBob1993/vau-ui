import type { Plugin } from 'vue';
import VButton from './VButton.vue';
import VButtonGroup from './VButtonGroup.vue';

export const ButtonPlugin: Plugin = {
  install (app) {
    app.component('VButton', VButton);
  }
};

export const ButtonGroupPlugin: Plugin = {
  install (app) {
    app.component('VButtonGroup', VButtonGroup);
  }
};
