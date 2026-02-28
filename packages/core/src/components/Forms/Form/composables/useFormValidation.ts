import type { FormItemInstance, FormValidationResult } from '../types';
import { computed, toValue, type MaybeRefOrGetter } from 'vue';

export interface UseFormValidationOptions {
  formItems: MaybeRefOrGetter<Array<FormItemInstance>>;
  onValid?: VoidFunction;
  onInvalid?: VoidFunction;
}

export function useFormValidation (options: UseFormValidationOptions) {
  const formItems = computed<Array<FormItemInstance>>(() => toValue(options.formItems));

  const validatableFormItems = computed<Array<FormItemInstance>>(() => formItems.value.filter(formItem => formItem.isValidatable));

  async function validate (silent = false): FormValidationResult {
    const validationPromises = await Promise.all(validatableFormItems.value.map(formItem => formItem.validate(silent)));

    const isValid = validationPromises.every(Boolean);

    if (isValid) {
      options.onValid?.();
    } else {
      options.onInvalid?.();
    }

    return isValid;
  }

  function clearValidate () {
    formItems.value.forEach(formItem => formItem.clearValidateErrors());
  }

  return {
    validatableFormItems,
    validate,
    clearValidate
  };
}
