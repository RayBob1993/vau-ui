import type { Plugin } from 'vue';
import VCountdown from './VCountdown.vue';

export const CountdownPlugin: Plugin = {
  install (app) {
    app.component('VCountdown', VCountdown);
  }
};
