import { OptionInstance, SelectRootContext, OptionValue } from '../types';
import { Maybe, MaybeNull } from '../../../../types';
export interface UseSelectValueOptions {
    selectRootContext: MaybeNull<SelectRootContext>;
}
export declare function useSelectValue(options: UseSelectValueOptions): {
    activeOptionValue: import('vue').ComputedRef<Maybe<OptionValue>>;
    activeOptions: import('vue').ComputedRef<OptionInstance[]>;
    hasValue: import('vue').ComputedRef<boolean>;
    isMultiple: import('vue').ComputedRef<boolean>;
    placeholder: import('vue').ComputedRef<Maybe<string>>;
    toggle: () => void;
};
