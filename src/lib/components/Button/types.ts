import type { IThemeProp, ISizeProp } from '../../types/props';

export type IVButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  plain?: boolean;
  wide?: boolean;
  type?: HTMLButtonElement['type'];
} & Partial<IThemeProp> & Partial<ISizeProp>;
