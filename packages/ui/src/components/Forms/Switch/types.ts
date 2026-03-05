import type { SizeProp, ThemeProp } from '@vau/core';

/**
 * Интерфейс свойств компонента VSwitch
 * @interface IVSwitchProps
 */
export type IVSwitchProps = {
  disabled?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;
