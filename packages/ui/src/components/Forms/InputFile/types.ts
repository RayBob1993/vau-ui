import type { ISizeProp, IThemeProp } from '../../../types';

/**
 * Интерфейс свойств компонента VInputFile
 * @interface IVInputFileProps
 */
export type IVInputFileProps = {
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;
