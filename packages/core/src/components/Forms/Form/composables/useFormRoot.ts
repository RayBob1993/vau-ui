import type { FormModel } from '../types';
import { useFormItems } from './useFormItems';
import { useFormValidation } from './useFormValidation';
import { useToggle } from '../../../../composables';
import { type MaybeRefOrGetter, toValue, watch } from 'vue';

export interface IUseFormOptions <MODEL extends FormModel> {
  modelValue: MaybeRefOrGetter<MODEL>;
  onValid?: VoidFunction;
  onInvalid?: VoidFunction;
}

export function useFormRoot <MODEL extends FormModel> (options: IUseFormOptions<MODEL>) {
  const { formItems, registerFormItem, unregisterFormItem } = useFormItems();
  const { validate, clearValidate, validatableFormItems } = useFormValidation({
    formItems: () => formItems.value,
    onValid: () => {
      options.onValid?.();
    },
    onInvalid: () => {
      options.onInvalid?.();
    }
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
