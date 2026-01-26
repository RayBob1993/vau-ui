import type { Plugin } from 'vue';
import VRating from './VRating.vue';

export const RatingPlugin: Plugin = {
  install (app) {
    app.component('VRating', VRating);
  }
};
