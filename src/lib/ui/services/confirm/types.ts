import type { IVConfirmProps } from '../../components/Confirm';

export interface IConfirmServiceEmits {
  onSuccess?: VoidFunction;
  onCancel?: VoidFunction;
  onClose?: VoidFunction;
}

export type IConfirmServiceOpenOptions = IVConfirmProps & IConfirmServiceEmits;
