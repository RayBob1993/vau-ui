import type { Plugin } from 'vue';
import VAffix from './VAffix.vue';

export const AffixPlugin: Plugin = {
  install (app) {
    app.component('VAffix', VAffix);
  }
};
