import { useFormRootContext } from './useFormRootContext';
import { useFormItemContext } from './useFormItemContext';
import { computed } from 'vue';

export function useFormContext () {
  const formRootContext = useFormRootContext();
  const formItemContext = useFormItemContext();

  const isValid = computed<boolean>(() => Boolean(formItemContext?.validationStatus.value.isSuccess));
  const isInvalid = computed<boolean>(() => Boolean(formItemContext?.validationStatus.value.isError));

  return {
    formRootContext,
    formItemContext,
    isValid,
    isInvalid
  };
}
