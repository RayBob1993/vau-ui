import type { Plugin } from 'vue';
import { vClickOutside } from './directive';

export const ClickOutsidePlugin: Plugin = {
  install (app) {
    app.directive('click-outside', vClickOutside);
  }
};
