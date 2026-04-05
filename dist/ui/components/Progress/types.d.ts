import { SizeProp, ThemeProp } from '../../../core/index.ts';
/**
 * Интерфейс свойств компонента VProgress
 * @interface IVProgressProps
 */
export type IVProgressProps = {
    indeterminate?: boolean;
    showValue?: boolean;
    value: number;
} & Partial<ThemeProp> & Partial<SizeProp>;
