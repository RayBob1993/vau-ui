import type { Plugin } from 'vue';
import { vTooltip } from './directive';

export const TooltipPlugin: Plugin = {
  install (app) {
    app.directive('tooltip', vTooltip);
  }
};
