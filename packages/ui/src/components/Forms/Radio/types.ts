import type { SizeProp, ThemeProp, DirectionProp, Maybe } from '@vau/core';

export type IVRadioValue = number | string;
export type IVRadioModelValue = Maybe<IVRadioValue>;

/**
 * Интерфейс свойств компонента VRadio
 * @interface IVRadioProps
 */
export type IVRadioProps = {
  disabled?: boolean;
  value: IVRadioValue;
} & Partial<ThemeProp> & Partial<SizeProp>;

/**
 * Интерфейс свойств компонента VRadioGroup
 * @interface IVRadioGroupProps
 */
export type IVRadioGroupProps = Partial<DirectionProp>;
