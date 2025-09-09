import type { Plugin } from 'vue';
import VPagination from './VPagination.vue';

export const PaginationPlugin: Plugin = {
  install (app) {
    app.component('VPagination', VPagination);
  }
};
