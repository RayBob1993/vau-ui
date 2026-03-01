import type { FormModel } from '../types';
import { useFormItems } from './useFormItems';
import { useFormValidation } from './useFormValidation';
import { useToggle } from '../../../../composables';
import { debounce } from '../../../../utils';
import { type MaybeRefOrGetter, onMounted, onScopeDispose, toValue, watch } from 'vue';

export interface UseFormRootOptions <MODEL extends FormModel> {
  modelValue: MaybeRefOrGetter<MODEL>;
  onValid?: VoidFunction;
  onInvalid?: VoidFunction;
}

export function useFormRoot <MODEL extends FormModel> (options: UseFormRootOptions<MODEL>) {
  const { formItems, registerFormItem, unregisterFormItem } = useFormItems();
  const { validate, clearValidate } = useFormValidation({
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


  const debouncedValidateModel = debounce(async () => {
    const result = await validate();

    setIsValid(result);
  }, 400);

  async function validateAndSyncIsValid (silent = false) {
    const result = await validate(silent);

    setIsValid(result);

    return result;
  }

  watch(() => toValue(options.modelValue), () => {
    debouncedValidateModel();
  }, {
    deep: true
  });

  onMounted(async () => {
    await validateAndSyncIsValid(true);
  });

  onScopeDispose(() => {
    debouncedValidateModel.cancel();
  });

  return {
    isValid,
    validate: validateAndSyncIsValid,
    clearValidate,
    registerFormItem,
    unregisterFormItem,
    reset
  };
}
