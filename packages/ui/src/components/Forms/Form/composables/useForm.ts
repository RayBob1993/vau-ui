import type { Maybe } from '../../../../types';
import type { IVFormItemValidationStatus } from '../../FormItem/types';
import { useFormItemContext } from '../../FormItem/context';
import { useFormContext } from '../context';
import { computed } from 'vue';

export function useForm () {
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
