import type { FormItemField } from '../types';
import type { Maybe } from '../../../../types';
import { ref } from 'vue';

export function useFormField () {
  const field = ref<Maybe<FormItemField>>();

  function registerField (newField: FormItemField) {
    field.value = newField;
  }

  function unregisterField () {
    field.value = undefined;
  }

  return {
    field,
    registerField,
    unregisterField
  };
}
