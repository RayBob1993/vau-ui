import type { Plugin } from 'vue';
import VAvatar from './VAvatar.vue';

export const AvatarPlugin: Plugin = {
  install (app) {
    app.component('VAvatar', VAvatar);
  }
};
