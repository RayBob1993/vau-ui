import type { Plugin } from 'vue';
import VTooltip from './VTooltip.vue';

export const TooltipPlugin: Plugin = {
  install (app) {
    app.component('VTooltip', VTooltip);
  }
};
