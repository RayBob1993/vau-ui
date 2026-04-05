import { FormRootContext, FormItemContext } from '..';
import { ComputedRef } from 'vue';
export declare function useFormContext(): {
    formRootContext: FormRootContext | null;
    formItemContext: FormItemContext | null;
    isValid: ComputedRef<boolean>;
    isInvalid: ComputedRef<boolean>;
};
