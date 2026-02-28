import type { FormItemValidationStatus, FormModel } from '../types';
import type { $ZodIssue } from 'zod/v4/core';
import type { ZodObject } from 'zod';
import type { MaybeNull } from '../../../../types';
import { computed, type MaybeRefOrGetter, ref, toValue } from 'vue';

export interface UseFormItemValidationOptions {
  data: MaybeRefOrGetter<MaybeNull<FormModel>>;
  schema: MaybeRefOrGetter<MaybeNull<ZodObject>>;
  onValid?: VoidFunction;
  onInvalid?: VoidFunction;
}

export function useFormItemValidation (options: UseFormItemValidationOptions) {
  const data = computed<MaybeNull<FormModel>>(() => toValue(options.data));
  const schema = computed<MaybeNull<ZodObject>>(() => toValue(options.schema));

  const validationStatus = ref<FormItemValidationStatus>({
    isError: false,
    isValidating: false,
    isSuccess: false
  });

  const validationErrors = ref<Array<$ZodIssue>>([]);

  function clearValidateErrors () {
    validationErrors.value = [];
  }

  async function validate (silent = false): Promise<boolean> {
    if (!data.value) {
      return false;
    }

    if (!schema.value) {
      return false;
    }

    validationStatus.value.isValidating = true;

    const result = await schema.value.safeParseAsync(data.value);

    validationStatus.value.isValidating = false;

    if (result.success) {
      validationStatus.value.isError = false;
      validationStatus.value.isSuccess = true;

      options.onValid?.();

      return true;
    } else {
      if (!silent) {
        validationStatus.value.isError = true;
        validationStatus.value.isSuccess = false;

        if (result.error) {
          validationErrors.value = result.error.issues;
        }
      }

      options.onInvalid?.();

      return false;
    }
  }

  return {
    validationStatus,
    validationErrors,
    clearValidateErrors,
    validate
  };
}
