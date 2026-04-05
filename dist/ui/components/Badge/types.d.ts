import { SizeProp, ThemeProp, UnscopedSlot } from '../../../core/index.ts';
/**
 * Интерфейс свойств компонента VBadge
 * @interface IVBadgeProps
 */
export type IVBadgeProps = {
    dot?: boolean;
    hidden?: boolean;
    max?: number;
    value?: string | number;
} & Partial<ThemeProp> & Partial<SizeProp>;
/**
 * Интерфейс слотов компонента VBadge
 * @interface IVBadgeSlots
 */
export interface IVBadgeSlots {
    default?: UnscopedSlot;
    content?: (props: {
        value: string;
    }) => void;
}
