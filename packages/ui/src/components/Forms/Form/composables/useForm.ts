import type { IVFormModel } from '../types';
import { useFormItems } from './useFormItems';
import { useFormValidation } from './useFormValidation';
import { type ModelRef, watch } from 'vue';
import { useToggle } from '@vau/core';

export function useForm (modelValue: ModelRef<IVFormModel>) {
  const { formItems, registerFormItem, unregisterFormItem } = useFormItems();
  const { validate, clearValidate, validatableFormItems } = useFormValidation({
    formItems
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

  watch(modelValue, async () => {
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
