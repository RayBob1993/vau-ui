import type { SizeProp, ThemeProp, UnscopedSlot } from '../../../core/index.js';
/**
 * Интерфейс свойств компонента VAlert
 * @interface IVAlertProps
 */
export type IVAlertProps = {
    title?: string;
    description?: string;
    showIcon?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;
/**
 * Интерфейс слотов компонента VAlert
 * @interface IVAlertSlots
 */
export interface IVAlertSlots {
    default?: UnscopedSlot;
    title?: UnscopedSlot;
    description?: UnscopedSlot;
}
