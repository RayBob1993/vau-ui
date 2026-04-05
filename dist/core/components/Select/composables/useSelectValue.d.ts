import { OptionInstance, SelectRootContext } from '../types';
import { Maybe, MaybeNull } from '../../../types';
import { ComputedRef } from 'vue';
export interface UseSelectValueOptions {
    selectRootContext: MaybeNull<SelectRootContext>;
}
export declare function useSelectValue(options: UseSelectValueOptions): {
    activeOptionValue: ComputedRef<Maybe<string>>;
    activeOptions: ComputedRef<OptionInstance[]>;
    hasValue: ComputedRef<boolean>;
    isMultiple: ComputedRef<boolean>;
    placeholder: ComputedRef<Maybe<string>>;
    toggle: () => void;
};
