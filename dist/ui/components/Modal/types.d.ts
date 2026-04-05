import { UnscopedSlot, ModalProps } from '../../../core/index.ts';
export interface IVModalProps extends ModalProps {
    title?: string;
}
export interface IVModalSlots {
    default?: UnscopedSlot;
    header?: UnscopedSlot;
    footer?: UnscopedSlot;
}
