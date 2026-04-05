import { FormItemField } from '../types';
import { Maybe } from '../../../types';
import { Ref } from 'vue';
export declare function useFormField(): {
    field: Ref<Maybe<FormItemField>, Maybe<FormItemField>>;
    registerField: (newField: FormItemField) => void;
    unregisterField: () => void;
};
