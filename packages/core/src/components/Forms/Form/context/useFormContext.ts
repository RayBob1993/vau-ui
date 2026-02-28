import { useFormRootContext } from './useFormRootContext';
import { useFormItemContext } from './useFormItemContext';
import { computed } from 'vue';

export function useFormContext () {
  const FormRootContext = useFormRootContext();
  const FormItemContext = useFormItemContext();

  const isValid = computed<boolean>(() => Boolean(FormItemContext?.validationStatus.value.isSuccess));
  const isInvalid = computed<boolean>(() => Boolean(FormItemContext?.validationStatus.value.isError));

  return {
    FormRootContext,
    FormItemContext,
    isValid,
    isInvalid
  };
}
