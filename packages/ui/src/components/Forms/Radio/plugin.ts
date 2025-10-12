import type { Plugin } from 'vue';
import VRadio from './VRadio.vue';
import VRadioButton from './VRadioButton.vue';
import VRadioGroup from './VRadioGroup.vue';

export const RadioPlugin: Plugin = {
  install (app) {
    app.component('VRadio', VRadio);
  }
};

export const RadioButtonPlugin: Plugin = {
  install (app) {
    app.component('VRadioButton', VRadioButton);
  }
};

export const RadioGroupPlugin: Plugin = {
  install (app) {
    app.component('VRadioGroup', VRadioGroup);
  }
};
