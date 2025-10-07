import type { ISizeProp, IThemeProp } from '../../../types';

export type IVCheckboxProps = {
  disabled?: boolean;
  indeterminate?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;
