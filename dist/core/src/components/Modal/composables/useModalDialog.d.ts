import { ModalRootContext } from '../types';
import { Maybe, MaybeNull } from '../../../types';
export interface UseModalDialogOptions {
    modalRootContext?: MaybeNull<ModalRootContext>;
}
export declare function useModalDialog(options: UseModalDialogOptions): {
    position: import('vue').ComputedRef<Maybe<import('..').ModalPosition | undefined>>;
};
