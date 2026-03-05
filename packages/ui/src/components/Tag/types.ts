import type { SizeProp, ThemeProp } from '@vau/core';

/**
 * Интерфейс свойств компонента VTag
 * @interface IVTagProps
 */
export type IVTagProps = {
  canDelete?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;

/**
 * Интерфейс событий компонента VTag
 * @interface IVTagEmits
 */
export type IVTagEmits = {
  delete: []
};
