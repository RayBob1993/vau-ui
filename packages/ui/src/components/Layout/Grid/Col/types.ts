import type { ISizeProp } from '../../../../types';

export type ISizeValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type IOffsetSize = ISizeValues;

/**
 * Интерфейс свойств компонента VCol
 * @interface IVColProps
 */
export type IVColProps = {
  order?: number;
  offset?: IOffsetSize;
} & Partial<ISizeProp>;
