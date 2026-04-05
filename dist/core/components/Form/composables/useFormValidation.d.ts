import { FormItemInstance, FormValidationResult } from '../types';
import { MaybeRefOrGetter, ComputedRef } from 'vue';
export interface UseFormValidationOptions {
    formItems: MaybeRefOrGetter<Array<FormItemInstance>>;
    onValid?: VoidFunction;
    onInvalid?: VoidFunction;
}
export declare function useFormValidation(options: UseFormValidationOptions): {
    validatableFormItems: ComputedRef<FormItemInstance[]>;
    validate: (silent?: boolean) => FormValidationResult;
    clearValidate: () => void;
};
