import { InputRootContext } from '../types';
import { MaybeNull } from '../../../types';
export interface UseInputAfterOptions {
    inputRootContext: MaybeNull<InputRootContext>;
}
export declare function useInputAfter(options: UseInputAfterOptions): {
    isClearable: import('vue').ComputedRef<boolean>;
    handleClear: () => void;
};
