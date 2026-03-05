import type { Plugin } from 'vue';
import VTag from './VTag.vue';
import VTagGroup from './VTagGroup.vue';

export const TagPlugin: Plugin = {
  install (app) {
    app.component('VTag', VTag);
  }
};

export const TagGroupPlugin: Plugin = {
  install (app) {
    app.component('VTagGroup', VTagGroup);
  }
};
