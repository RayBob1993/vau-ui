import type { ISizeProp, IThemeProp } from '../../../types';

/**
 * Интерфейс свойств компонента VInputRadio
 * @interface IVInputRadioProps
 */
export type IVInputRadioProps = {
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;
