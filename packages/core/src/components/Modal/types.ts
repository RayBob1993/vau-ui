import type { ISizeProp } from '../../types';

export type ModalProps = {

} & Partial<ISizeProp>;

export interface ModalEmits {
  opened: [payload: Element];
  closed: [payload: Element];
  open: [];
  close: [];
}

export interface ModalRootContext {
  close: VoidFunction;
}
