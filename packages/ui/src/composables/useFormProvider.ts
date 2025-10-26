import type { Maybe } from '@vau/core';
import type { IVFormItemValidationStatus } from '../components/Forms/FormItem/types';
import { useFormContext, useFormItemContext } from '../components';
import { computed } from 'vue';

export function useFormProvider () {
  const Form = useFormContext();
  const FormItem = useFormItemContext();

  const isFormDisabled = computed<boolean>(() => Boolean(Form?.props.disabled || FormItem?.props.disabled));
  const isRequired = computed<boolean>(() => Boolean(FormItem?.isRequired.value));
  const validationStatus = computed<Maybe<IVFormItemValidationStatus>>(() => FormItem?.validationStatus.value);

  return {
    Form,
    FormItem,
    isFormDisabled,
    validationStatus,
    isRequired
  };
}
