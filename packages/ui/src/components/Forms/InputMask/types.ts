import type { IVInputProps } from '../Input/types';
import type { ValueOf } from '@vau/core';
import { MaskModes } from './constants';

export type IMaskMode = ValueOf<typeof MaskModes>;

/**
 * Интерфейс свойств компонента VInputMask
 * @interface IVInputMaskProps
 */
export interface IVInputMaskProps extends Omit<IVInputProps, 'type'> {
  mask?: Record<string, unknown>;
  maskMode?: IMaskMode;
}
