import type { FormModel } from '../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseFormRootOptions<MODEL extends FormModel> {
    modelValue: MaybeRefOrGetter<MODEL>;
    onValid?: VoidFunction;
    onInvalid?: VoidFunction;
}
export declare function useFormRoot<MODEL extends FormModel>(options: UseFormRootOptions<MODEL>): {
    isValid: import("vue").Ref<boolean, boolean>;
    validate: (silent?: boolean) => Promise<boolean>;
    clearValidate: () => void;
    registerFormItem: (newFormItem: import("..").FormItemInstance) => void;
    unregisterFormItem: (id: string) => void;
    reset: () => void;
};
