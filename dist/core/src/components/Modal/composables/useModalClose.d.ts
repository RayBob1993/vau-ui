import { ModalRootContext } from '../types';
import { MaybeNull } from '../../../types';
export interface UseModalCloseOptions {
    modalRootContext?: MaybeNull<ModalRootContext>;
}
export declare function useModalClose(options: UseModalCloseOptions): {
    close: () => void;
};
