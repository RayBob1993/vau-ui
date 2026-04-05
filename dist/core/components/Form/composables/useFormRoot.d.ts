import { FormModel } from '../types';
import { MaybeRefOrGetter, Ref } from 'vue';
import { FormItemInstance } from '..';
export interface UseFormRootOptions<MODEL extends FormModel> {
    modelValue: MaybeRefOrGetter<MODEL>;
    onValid?: VoidFunction;
    onInvalid?: VoidFunction;
}
export declare function useFormRoot<MODEL extends FormModel>(options: UseFormRootOptions<MODEL>): {
    isValid: Ref<boolean, boolean>;
    validate: (silent?: boolean) => Promise<boolean>;
    clearValidate: () => void;
    registerFormItem: (newFormItem: FormItemInstance) => void;
    unregisterFormItem: (id: string) => void;
    reset: () => void;
};
