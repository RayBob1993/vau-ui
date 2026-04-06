import type { ButtonProps } from '../types';
import type { FormRootContext, FormItemContext } from '../../Form';
import type { MaybeNull } from '../../../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseButtonRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    props: MaybeRefOrGetter<ButtonProps>;
}
export declare function useButtonRoot(options: UseButtonRootOptions): {
    isDisabled: import("vue").ComputedRef<boolean>;
};
