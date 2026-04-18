import type { UnscopedSlot, DrawerProps } from '../../../core/index.js';
export interface IVDrawerProps extends DrawerProps {
    title?: string;
}
export interface IVDrawerSlots {
    default?: UnscopedSlot;
    header?: UnscopedSlot;
    footer?: UnscopedSlot;
}
