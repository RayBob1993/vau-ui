import { ButtonProps } from '../types';
import { FormRootContext, FormItemContext } from '../../Form';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter, ComputedRef } from 'vue';
export interface UseButtonRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    props: MaybeRefOrGetter<ButtonProps>;
}
export declare function useButtonRoot(options: UseButtonRootOptions): {
    isDisabled: ComputedRef<boolean>;
};
