import { SizeProp } from '../../types';
export type ModalProps = {} & Partial<SizeProp>;
export interface ModalEmits {
    opened: [payload: Element];
    closed: [payload: Element];
    open: [];
    close: [];
}
export interface ModalRootContext {
    close: VoidFunction;
}
