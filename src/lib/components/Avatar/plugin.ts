import type { Plugin } from 'vue';
import VAvatar from './VAvatar.vue';
import VAvatarGroup from './VAvatarGroup.vue';

export const AvatarPlugin: Plugin = {
  install (app) {
    app.component('VAvatar', VAvatar);
  }
};

export const AvatarGroupPlugin: Plugin = {
  install (app) {
    app.component('VAvatarGroup', VAvatarGroup);
  }
};
