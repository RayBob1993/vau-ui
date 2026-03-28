import { FormItemField } from '../types';
import { Maybe } from '../../../types';
export declare function useFormField(): {
    field: import('vue').Ref<Maybe<FormItemField>, Maybe<FormItemField>>;
    registerField: (newField: FormItemField) => void;
    unregisterField: () => void;
};
