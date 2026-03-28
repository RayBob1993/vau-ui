import type { IConfirmServiceOpenOptions } from './types';
import type { MaybeNull } from '@vau/core';
import  { VConfirm } from '../../components/Confirm';
import { type AppContext, h, render } from 'vue';

export class ConfirmService {
  static #container: MaybeNull<HTMLDivElement> = null;

  static async open (options: IConfirmServiceOpenOptions, appContext?: AppContext): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      if (!this.#container) {
        this.#container = document.createElement('div');
        this.#container.id = 'confirm-container';
        document.body.appendChild(this.#container);
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

      render(VConfirmVNode, this.#container);
    });
  }

  private static close () {
    if (!this.#container) {
      return;
    }

    render(null, this.#container);
  }
}
