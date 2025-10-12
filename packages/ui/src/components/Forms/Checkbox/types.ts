import type { ISizeProp, IThemeProp } from '../../../types';

/**
 * Интерфейс свойств компонента VCheckbox
 * @interface IVCheckboxProps
 */
export type IVCheckboxProps = {
  disabled?: boolean;
  indeterminate?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;
