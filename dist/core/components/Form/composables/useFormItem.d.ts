import type { MaybeNull } from '../../../types';
import type { FormRootContext, FormItemProps } from '../types';
import { z } from 'zod';
import { type MaybeRefOrGetter } from 'vue';
export interface UseFormItemOptions {
    formRootContext: MaybeNull<FormRootContext>;
    props: MaybeRefOrGetter<FormItemProps>;
    onValid?: VoidFunction;
    onInvalid?: VoidFunction;
}
export declare function useFormItem(options: UseFormItemOptions): {
    id: string;
    validationErrors: import("vue").Ref<z.core.$ZodIssue[], z.core.$ZodIssue[]>;
    validationStatus: import("vue").Ref<import("..").FormItemValidationStatus, import("..").FormItemValidationStatus>;
    isDisabled: import("vue").ComputedRef<boolean>;
    isRequired: import("vue").ComputedRef<boolean>;
    reset: () => void;
    validate: (silent?: boolean) => import("..").FormValidationResult;
    clearValidateErrors: VoidFunction;
    registerField: (newField: import("..").FormItemField) => void;
    unregisterField: () => void;
};
