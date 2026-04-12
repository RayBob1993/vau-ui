import type { FormItemError, FormItemValidationStatus, FormValidationResult, FormModel } from '../types';
import type { ZodObject } from 'zod';
import type { MaybeNull } from '../../../types';
import { type MaybeRefOrGetter, type Ref } from 'vue';
export interface UseFormItemValidationOptions {
    data: MaybeRefOrGetter<MaybeNull<FormModel>>;
    schema: MaybeRefOrGetter<MaybeNull<ZodObject>>;
    onValid?: VoidFunction;
    onInvalid?: VoidFunction;
}
export interface UseFormItemValidationReturn {
    validationStatus: Ref<FormItemValidationStatus>;
    validationErrors: Ref<Array<FormItemError>>;
    clearValidateErrors: VoidFunction;
    validate: (silent?: boolean) => FormValidationResult;
}
export declare function useFormItemValidation(options: UseFormItemValidationOptions): UseFormItemValidationReturn;
