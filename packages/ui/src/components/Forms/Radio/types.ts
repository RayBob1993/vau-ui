import type { ISizeProp, IThemeProp, IDirectionProp } from '../../../types';
import type { Maybe } from '@vau/core';

export type IVRadioValue = number | string;
export type IVRadioModelValue = Maybe<IVRadioValue>;

/**
 * Интерфейс свойств компонента VRadio
 * @interface IVRadioProps
 */
export type IVRadioProps = {
  disabled?: boolean;
  value: IVRadioValue;
} & Partial<IThemeProp> & Partial<ISizeProp>;

/**
 * Интерфейс свойств компонента VRadioGroup
 * @interface IVRadioGroupProps
 */
export type IVRadioGroupProps = IDirectionProp;
