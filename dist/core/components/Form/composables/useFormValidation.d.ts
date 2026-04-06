import type { FormItemInstance, FormValidationResult } from '../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseFormValidationOptions {
    formItems: MaybeRefOrGetter<Array<FormItemInstance>>;
    onValid?: VoidFunction;
    onInvalid?: VoidFunction;
}
export declare function useFormValidation(options: UseFormValidationOptions): {
    validatableFormItems: import("vue").ComputedRef<FormItemInstance[]>;
    validate: (silent?: boolean) => FormValidationResult;
    clearValidate: () => void;
};
