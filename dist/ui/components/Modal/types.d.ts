import type { UnscopedSlot, ModalProps } from '../../../core/index.js';
export interface IVModalProps extends ModalProps {
    title?: string;
}
export interface IVModalSlots {
    default?: UnscopedSlot;
    header?: UnscopedSlot;
    footer?: UnscopedSlot;
}
