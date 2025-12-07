import type { IThemeProp, ISizeProp, IDirectionProp } from '../../types';

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
} & Partial<IThemeProp> & Partial<ISizeProp>;

/**
 * Интерфейс свойств компонента VButtonGroup
 * @interface IVButtonGroupProps
 */
export type IVButtonGroupProps = Partial<IDirectionProp>;
