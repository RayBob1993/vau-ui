import type { SelectRootContext } from '../types';
import type { MaybeNull } from '../../../types';
export interface UseSelectTriggerOptions {
    selectRootContext: MaybeNull<SelectRootContext>;
}
export declare function useSelectTrigger(options: UseSelectTriggerOptions): {
    open: () => void;
    close: () => void;
    toggle: () => void;
};
