import type { Plugin } from 'vue';
import VCheckbox from './VCheckbox.vue';
import VCheckboxButton from './VCheckboxButton.vue';
import VCheckboxGroup from './VCheckboxGroup.vue';

export const CheckboxPlugin: Plugin = {
  install (app) {
    app.component('VCheckbox', VCheckbox);
  }
};

export const CheckboxButtonPlugin: Plugin = {
  install (app) {
    app.component('VCheckboxButton', VCheckboxButton);
  }
};

export const CheckboxGroupPlugin: Plugin = {
  install (app) {
    app.component('VCheckboxGroup', VCheckboxGroup);
  }
};
