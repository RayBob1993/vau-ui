import type { ISizeProp, IThemeProp } from '../../types';

/**
 * Интерфейс свойств компонента VTag
 * @interface IVTagProps
 */
export type IVTagProps = {
  canDelete?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;

/**
 * Интерфейс событий компонента VTag
 * @interface IVTagEmits
 */
export type IVTagEmits = {
  delete: []
};
