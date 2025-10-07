import type { IVFormValidationResult } from '../types';
import type { IVFormItemInstance } from '../../FormItem/types';
import { delay } from '@vau/core';
import { computed, type Ref } from 'vue';

interface IUseFormValidationPayload {
  formItems: Ref<Array<IVFormItemInstance>>;
}

export function useFormValidation ({ formItems }: IUseFormValidationPayload) {
  const validatableFormItems = computed<Array<IVFormItemInstance>>(() => formItems.value.filter(formItem => formItem.isValidatable.value));

  async function validate (silent = false): IVFormValidationResult {
    const validationPromises = await Promise.all(validatableFormItems.value.map(formItem => formItem.validate(silent)));

    return validationPromises.every(Boolean);
  }

  async function clearValidate () {
    await delay(0);

    formItems.value.forEach(formItem => formItem.clearValidate());
  }

  return {
    validate,
    clearValidate
  };
}
