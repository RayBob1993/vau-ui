import type { Plugin } from 'vue';
import VBreadcrumbs from './VBreadcrumbs.vue';

export const BreadcrumbsPlugin: Plugin = {
  install (app) {
    app.component('VBreadcrumbs', VBreadcrumbs);
  }
};
