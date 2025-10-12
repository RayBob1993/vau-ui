import type { ISizeProp, IThemeProp } from '../../../types';

/**
 * Интерфейс свойств компонента VSwitch
 * @interface IVSwitchProps
 */
export type IVSwitchProps = {
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;
