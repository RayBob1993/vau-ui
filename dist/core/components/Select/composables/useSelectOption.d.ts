import { OptionProps, OptionValue, SelectRootContext } from '../types';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter, ComputedRef } from 'vue';
export interface UseSelectOptionOptions {
    selectRootContext: MaybeNull<SelectRootContext>;
    props: MaybeRefOrGetter<OptionProps>;
}
export declare function useSelectOption(options: UseSelectOptionOptions): {
    isActive: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    handleChange: (value: OptionValue) => void;
};
