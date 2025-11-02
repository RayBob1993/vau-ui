import type { IConfirmServiceOpenOptions } from './types';
import  { VConfirm } from '../../components/Confirm';
import { h, render } from 'vue';

export class ConfirmService {
  private static container: HTMLDivElement | null = null;

  static async open (options: IConfirmServiceOpenOptions, appContext = null): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      if (!this.container) {
        this.container = document.createElement('div');
        this.container.id = 'confirm-service-container';
        document.body.appendChild(this.container);
      }

      const handleClose = (result: boolean)=> {
        try {
          this.close();
          resolve(result);
        } catch (error) {
          console.error(error);
          resolve(false);
        }
      };

      const VConfirmVNode = h(VConfirm, {
        ...options,
        onSuccess: () => {
          handleClose(true);
          options.onSuccess?.();
        },
        onCancel: () => {
          handleClose(false);
          options.onCancel?.();
        },
        onClose: () => {
          this.close();
          options.onClose?.();
        },
        appContext
      });

      render(VConfirmVNode, this.container);
    });
  }

  private static close () {
    if (this.container) {
      render(null, this.container);
    }
  }
}
