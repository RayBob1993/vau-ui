import type { ThemeProp, SizeProp, DirectionProp } from '@vau/core';

/**
 * Интерфейс свойств компонента VButton
 * @interface IVButtonProps
 */
export type IVButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  plain?: boolean;
  wide?: boolean;
  type?: HTMLButtonElement['type'];
} & Partial<ThemeProp> & Partial<SizeProp>;

/**
 * Интерфейс свойств компонента VButtonGroup
 * @interface IVButtonGroupProps
 */
export type IVButtonGroupProps = Partial<DirectionProp>;
