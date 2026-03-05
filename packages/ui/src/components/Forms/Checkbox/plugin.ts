import type { Plugin } from 'vue';
import VCheckbox from './VCheckbox.vue';
import VCheckboxGroup from './VCheckboxGroup.vue';

export const CheckboxPlugin: Plugin = {
  install (app) {
    app.component('VCheckbox', VCheckbox);
  }
};

export const CheckboxGroupPlugin: Plugin = {
  install (app) {
    app.component('VCheckboxGroup', VCheckboxGroup);
  }
};
