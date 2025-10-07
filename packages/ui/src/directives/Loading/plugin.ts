import type { Plugin } from 'vue';
import { vLoading } from './directive';

export const LoadingPlugin: Plugin = {
  install (app) {
    app.directive('loading', vLoading);
  }
};
