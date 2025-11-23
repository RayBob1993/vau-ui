import type { MaybeNull } from '@vau/core';
import type { IToastServiceOpenOptions } from './types';
import  { VToast } from '../../components/Toast';
import { h, render } from 'vue';

export class ToastService {
  static #container: MaybeNull<HTMLDivElement> = null;

  static open (options: IToastServiceOpenOptions, appContext = null) {
    if (!this.#container) {
      this.#container = document.createElement('div');
      this.#container.id = 'toast-container';
      document.body.appendChild(this.#container);
    }

    const VToastVNode = h(VToast, {
      ...options,
      appContext
    });

    render(VToastVNode, this.#container);
  }
}
