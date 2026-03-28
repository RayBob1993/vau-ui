import type { IVDrawerProps } from '../../components';

export interface IDrawerServiceEmits {
  onOpened?: (payload: Element) => void;
  onClosed?: (payload: Element) => void;
  onOpen?: VoidFunction;
  onClose?: VoidFunction;
}

export type IDrawerServiceOpenOptions = IVDrawerProps & IDrawerServiceEmits;
