import { ButtonProps } from '../types';
import { FormRootContext, FormItemContext } from '../../Forms';
import { MaybeNull } from '../../../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseButtonRootOptions {
    formRootContext: MaybeNull<FormRootContext>;
    formItemContext: MaybeNull<FormItemContext>;
    props: MaybeRefOrGetter<ButtonProps>;
}
export declare function useButtonRoot(options: UseButtonRootOptions): {
    isDisabled: import('vue').ComputedRef<boolean>;
};
