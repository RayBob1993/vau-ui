import type { IModalServiceOpenOptions } from './types';
import { VModal } from '../../components';
import { h, render, type AppContext } from 'vue';

export class ModalService {
  static open (options: IModalServiceOpenOptions, appContext?: AppContext) {
    const VModalVNode = h(VModal, {
      ...options,
      appContext
    });

    render(VModalVNode, document.body);
  }
}
