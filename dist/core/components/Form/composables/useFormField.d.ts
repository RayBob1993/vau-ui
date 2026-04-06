import type { FormItemField } from '../types';
import type { Maybe } from '../../../types';
export declare function useFormField(): {
    field: import("vue").Ref<Maybe<FormItemField>, Maybe<FormItemField>>;
    registerField: (newField: FormItemField) => void;
    unregisterField: () => void;
};
