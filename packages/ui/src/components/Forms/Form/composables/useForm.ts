import type { IVFormModel } from '../types';
import { useFormItems } from './useFormItems';
import { useFormValidation } from './useFormValidation';
import { type MaybeRefOrGetter, toValue, watch } from 'vue';
import { useToggle } from '@vau/core';

export interface IUseFormOptions {
  modelValue: MaybeRefOrGetter<IVFormModel>;
}

export function useForm (options: IUseFormOptions) {
  const { formItems, registerFormItem, unregisterFormItem } = useFormItems();
  const { validate, clearValidate, validatableFormItems } = useFormValidation({
    formItems: () => formItems.value
  });

  const [isValid, setIsValid] = useToggle();

  function reset () {
    formItems.value.forEach(formItem => formItem.reset());

    clearValidate();
  }

  watch(validatableFormItems, formItems => {
    setIsValid(!formItems.length);
  }, {
    immediate: true
  });

  watch(() => toValue(options.modelValue), async () => {
    const isValid = await validate(true);

    setIsValid(isValid);
  }, {
    deep: true
  });

  return {
    isValid,
    validate,
    clearValidate,
    registerFormItem,
    unregisterFormItem,
    reset
  };
}
