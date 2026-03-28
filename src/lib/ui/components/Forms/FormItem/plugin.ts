import type { Plugin } from 'vue';
import VFormItem from './VFormItem.vue';

export const FormItemPlugin: Plugin = {
  install (app) {
    app.component('VFormItem', VFormItem);
  }
};
