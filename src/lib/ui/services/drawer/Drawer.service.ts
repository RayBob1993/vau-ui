import type { IDrawerServiceOpenOptions } from './types';
import { VDrawer } from '../../components';
import { type AppContext, h, render } from 'vue';

export class DrawerService {
  static open (options: IDrawerServiceOpenOptions, appContext?: AppContext) {
    const VDrawerVNode = h(VDrawer, {
      ...options,
      appContext
    });

    render(VDrawerVNode, document.body);
  }
}
