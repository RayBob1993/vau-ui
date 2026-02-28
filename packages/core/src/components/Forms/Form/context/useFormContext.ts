import type { Maybe } from '../../../../types';
import type { FormItemValidationStatus } from '../types';
import { useFormRootContext } from './useFormRootContext';
import { useFormItemContext } from './useFormItemContext';
import { computed } from 'vue';

export function useFormContext () {
  const Root = useFormRootContext();
  const Item = useFormItemContext();

  const validationStatus = computed<Maybe<FormItemValidationStatus>>(() => Item?.validationStatus.value);

  return {
    Root,
    Item,
    validationStatus
  };
}
