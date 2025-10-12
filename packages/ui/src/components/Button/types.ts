import type { IThemeProp, ISizeProp } from '../../types';

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
