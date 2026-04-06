import type { SelectProps, SelectModelValue, OptionValue } from '../types';
import type { MaybeNull } from '../../../types';
import type { FormRootContext, FormItemContext } from '../../Form';
import { type MaybeRefOrGetter } from 'vue';
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
    activeOption: import("vue").ComputedRef<import("../../..").Maybe<import("..").OptionInstance>>;
    activeOptions: import("vue").ComputedRef<import("..").OptionInstance[]>;
    hasValue: import("vue").ComputedRef<boolean>;
    isOpen: import("vue").Ref<boolean, boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    open: () => void;
    close: () => void;
    toggle: () => void;
    registerOption: (newOption: import("..").OptionInstance) => void;
    unregisterOption: (id: string) => void;
    setModelValue: (value: OptionValue) => void;
    reset: () => void;
};
