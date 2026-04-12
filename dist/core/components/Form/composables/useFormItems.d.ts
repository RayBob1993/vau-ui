import type { FormItemInstance } from '../types';
export declare function useFormItems(): {
    formItems: import("vue").Ref<{
        id: string;
        isValidatable: boolean;
        isRequired: boolean;
        props: {
            disabled?: boolean | undefined;
            name?: string | undefined;
        };
        validate: (silent?: boolean) => import("..").FormValidationResult;
        validationStatus: {
            isError: boolean;
            isValidating: boolean;
            isSuccess: boolean;
        };
        clearValidateErrors: VoidFunction;
        reset: VoidFunction;
    }[], FormItemInstance[] | {
        id: string;
        isValidatable: boolean;
        isRequired: boolean;
        props: {
            disabled?: boolean | undefined;
            name?: string | undefined;
        };
        validate: (silent?: boolean) => import("..").FormValidationResult;
        validationStatus: {
            isError: boolean;
            isValidating: boolean;
            isSuccess: boolean;
        };
        clearValidateErrors: VoidFunction;
        reset: VoidFunction;
    }[]>;
    registerFormItem: (newFormItem: FormItemInstance) => void;
    unregisterFormItem: (id: string) => void;
};
