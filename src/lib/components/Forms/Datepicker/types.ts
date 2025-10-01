import type { ISizeProp, IThemeProp } from '../../../types';

export type IVDatepickerProps = {
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;
