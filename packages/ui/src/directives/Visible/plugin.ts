import type { Plugin } from 'vue';
import { vVisible } from './directive';

export const VisiblePlugin: Plugin = {
  install (app) {
    app.directive('visible', vVisible);
  }
};
