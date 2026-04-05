import { InputRootContext } from '../types';
import { MaybeNull } from '../../../types';
import { ComputedRef } from 'vue';
export interface UseInputAfterOptions {
    inputRootContext: MaybeNull<InputRootContext>;
}
export declare function useInputAfter(options: UseInputAfterOptions): {
    isClearable: ComputedRef<boolean>;
    handleClear: () => void;
};
