import type { SizeProp, ThemeProp } from '@vau/core';

/**
 * Интерфейс свойств компонента VInputFile
 * @interface IVInputFileProps
 */
export type IVInputFileProps = {
  disabled?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;
