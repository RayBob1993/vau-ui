import { OptionProps, OptionValue, SelectRootContext } from '../types';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseSelectOptionOptions {
    selectRootContext: MaybeNull<SelectRootContext>;
    props: MaybeRefOrGetter<OptionProps>;
}
export declare function useSelectOption(options: UseSelectOptionOptions): {
    isActive: import('vue').ComputedRef<boolean>;
    isDisabled: import('vue').ComputedRef<boolean>;
    handleChange: (value: OptionValue) => void;
};
