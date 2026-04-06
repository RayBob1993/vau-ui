import type { SwitchProps, SwitchModelValue } from '../types';
import type { FormRootContext, FormItemContext } from '../../Form';
import type { MaybeNull } from '../../../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseSwitchRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    props: MaybeRefOrGetter<SwitchProps>;
    modelValue: MaybeRefOrGetter<SwitchModelValue>;
}
export declare function useSwitchRoot(options: UseSwitchRootOptions): {
    isActive: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
};
