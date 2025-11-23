import type { IVModalProps } from '../../components';

export interface IModalServiceEmits {
  onOpened?: (payload: Element) => void;
  onClosed?: (payload: Element) => void;
  onOpen?: VoidFunction;
  onClose?: VoidFunction;
}

export type IModalServiceOpenOptions = IVModalProps & IModalServiceEmits;
