import type { SizeProp, ThemeProp, DirectionProp } from '@vau/core';

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
} & Partial<ThemeProp> & Partial<SizeProp>;

/**
 * Интерфейс свойств компонента VCheckboxGroup
 * @interface IVCheckboxGroupProps
 */
export type IVCheckboxGroupProps = Partial<DirectionProp>;
