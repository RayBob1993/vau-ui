import type { Plugin } from 'vue';
import VDropdown from './VDropdown.vue';

export const DropdownPlugin: Plugin = {
  install (app) {
    app.component('VDropdown', VDropdown);
  }
};
