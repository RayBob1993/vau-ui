import { SelectProps, SelectModelValue, OptionValue } from '../types';
import { MaybeNull } from '../../../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { MaybeRefOrGetter, ComputedRef, Ref } from 'vue';
import { Maybe } from '../../..';
import { OptionInstance } from '..';
export interface UseSelectRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    modelValue: MaybeRefOrGetter<SelectModelValue>;
    props: MaybeRefOrGetter<SelectProps>;
    onChange?: (value: OptionValue) => void;
    onChangeModel?: (value: SelectModelValue) => void;
    onClear?: VoidFunction;
}
export declare function useSelectRoot(options: UseSelectRootOptions): {
    activeOption: ComputedRef<Maybe<OptionInstance>>;
    activeOptions: ComputedRef< OptionInstance[]>;
    hasValue: ComputedRef<boolean>;
    isOpen: Ref<boolean, boolean>;
    isDisabled: ComputedRef<boolean>;
    open: () => void;
    close: () => void;
    toggle: () => void;
    registerOption: (newOption: OptionInstance) => void;
    unregisterOption: (id: string) => void;
    setModelValue: (value: OptionValue) => void;
    reset: () => void;
};
