import { OptionInstance, SelectRootContext } from '../types';
import { Maybe, MaybeNull } from '../../../../types';
export interface UseSelectValueOptions {
    selectRootContext: MaybeNull<SelectRootContext>;
}
export declare function useSelectValue(options: UseSelectValueOptions): {
    activeOption: import('vue').ComputedRef<Maybe<OptionInstance>>;
    activeOptions: import('vue').ComputedRef<OptionInstance[]>;
    hasValue: import('vue').ComputedRef<boolean>;
    isMultiple: import('vue').ComputedRef<boolean>;
    placeholder: import('vue').ComputedRef<Maybe<string>>;
};
