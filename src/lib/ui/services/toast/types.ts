import type { IVToastProps } from '../../components/Toast';

export interface IToastServiceEmits {
  onSuccess?: VoidFunction;
  onCancel?: VoidFunction;
  onClose?: VoidFunction;
}

export type IToastServiceOpenOptions = IVToastProps & IToastServiceEmits;
