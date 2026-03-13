import { ModalProps } from '../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseModalRootOptions {
    props: MaybeRefOrGetter<ModalProps>;
    modelValue: MaybeRefOrGetter<boolean>;
    onClose?: VoidFunction;
}
export declare function useModalRoot(options: UseModalRootOptions): {
    close: () => void;
};
