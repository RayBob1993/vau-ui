import type { ISizeProp, IThemeProp } from '../../types';

/**
 * Интерфейс свойств компонента VText
 * @interface IVTextProps
 */
export type IVTextProps = {
  uppercase?: boolean;
  underline?: boolean;
  content?: string | number;
} & Partial<IThemeProp> & Partial<ISizeProp>;
