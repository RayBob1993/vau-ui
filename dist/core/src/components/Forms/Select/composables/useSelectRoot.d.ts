import { SelectProps, SelectModelValue, OptionValue } from '../types';
import { MaybeNull } from '../../../../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { MaybeRefOrGetter } from 'vue';
export interface UseSelectRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    modelValue: MaybeRefOrGetter<SelectModelValue>;
    props: MaybeRefOrGetter<SelectProps>;
    onChange?: (value: SelectModelValue) => void;
    onChangeModel?: (value: SelectModelValue) => void;
    onClear?: VoidFunction;
}
export declare function useSelectRoot(options: UseSelectRootOptions): {
    activeOption: import('vue').ComputedRef<import('../../../..').Maybe<import('../types').OptionInstance>>;
    activeOptions: import('vue').ComputedRef<import('../types').OptionInstance[]>;
    hasValue: import('vue').ComputedRef<boolean>;
    isOpen: import('vue').Ref<boolean, boolean>;
    isDisabled: import('vue').ComputedRef<boolean>;
    open: () => void;
    close: () => void;
    toggle: () => void;
    registerOption: (newOption: import('../types').OptionInstance) => void;
    unregisterOption: (id: string) => void;
    setModelValue: (value: OptionValue) => void;
    reset: () => void;
};
