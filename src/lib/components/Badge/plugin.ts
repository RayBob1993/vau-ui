import type { Plugin } from 'vue';
import VBadge from './VBadge.vue';

export const BadgePlugin: Plugin = {
  install (app) {
    app.component('VBadge', VBadge);
  }
};
