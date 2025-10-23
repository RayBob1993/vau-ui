import type { ISizeProp, IThemeProp } from '../../../types';

export type IVCheckboxValue = number | string;
export type IVCheckboxModelValue = boolean | Array<IVCheckboxValue>;

/**
 * Интерфейс свойств компонента VCheckbox
 * @interface IVCheckboxProps
 */
export type IVCheckboxProps = {
  disabled?: boolean;
  indeterminate?: boolean;
  value?: IVCheckboxValue;
} & Partial<IThemeProp> & Partial<ISizeProp>;
