import type { Plugin } from 'vue';
import VFlex from './VFlex.vue';
import VFlexItem from './VFlexItem.vue';

export const FlexPlugin: Plugin = {
  install (app) {
    app.component('VFlex', VFlex);
  }
};

export const FlexItemPlugin: Plugin = {
  install (app) {
    app.component('VFlexItem', VFlexItem);
  }
};
