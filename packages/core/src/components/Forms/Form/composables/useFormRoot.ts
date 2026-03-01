import type { FormModel } from '../types';
import { useFormItems } from './useFormItems';
import { useFormValidation } from './useFormValidation';
import { useToggle } from '../../../../composables';
import { debounce } from '../../../../utils';
import { type MaybeRefOrGetter, onScopeDispose, toValue, watch } from 'vue';

export interface UseFormRootOptions <MODEL extends FormModel> {
  modelValue: MaybeRefOrGetter<MODEL>;
  onValid?: VoidFunction;
  onInvalid?: VoidFunction;
}

export function useFormRoot <MODEL extends FormModel> (options: UseFormRootOptions<MODEL>) {
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

  const debouncedValidateModel = debounce(async () => {
    const isValid = await validate(true);

    setIsValid(isValid);
  }, 400);

  watch(() => toValue(options.modelValue), () => {
    debouncedValidateModel();
  }, {
    deep: true
  });

  onScopeDispose(() => {
    debouncedValidateModel.cancel();
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
