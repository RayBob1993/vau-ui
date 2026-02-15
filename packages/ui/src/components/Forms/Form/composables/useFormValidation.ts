import type { IVFormValidationResult } from '../types';
import type { IVFormItemInstance } from '../../FormItem';
import { computed, toValue, type MaybeRefOrGetter } from 'vue';

interface IUseFormValidationOptions {
  formItems: MaybeRefOrGetter<Array<IVFormItemInstance>>;
}

export function useFormValidation (options: IUseFormValidationOptions) {
  const validatableFormItems = computed<Array<IVFormItemInstance>>(() => toValue(options.formItems).filter(formItem => formItem.isValidatable));

  async function validate (silent = false): IVFormValidationResult {
    const validationPromises = await Promise.all(validatableFormItems.value.map(formItem => formItem.validate(silent)));

    return validationPromises.every(Boolean);
  }

  function clearValidate () {
    toValue(options.formItems).forEach(formItem => formItem.clearValidate());
  }

  return {
    validatableFormItems,
    validate,
    clearValidate
  };
}
