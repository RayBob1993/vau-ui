import type { IVFormItemField, IVFormItemProps, IVFormItemValidationStatus } from '../types';
import type { IVFormContext, IVFormModelValues } from '../../Form';
import type { $ZodIssue } from 'zod/v4/core';
import { getProp, type MaybeNull } from '@vau/core';
import { computed, ref, useId, toRaw, watch, shallowRef } from 'vue';
import { z, type ZodType } from 'zod';

export function useFormItem (props: IVFormItemProps, formContext: MaybeNull<IVFormContext>) {
  const id = useId();

  const validationErrors = ref<Array<$ZodIssue>>([]);
  const field = shallowRef<IVFormItemField>();

  const validationStatus = ref<IVFormItemValidationStatus>({
    isError: false,
    isValidating: false,
    isSuccess: false
  });

  const isDisabled = computed<boolean>(() => !!(props.disabled || formContext?.props.disabled));
  const modelValue = computed<IVFormModelValues>(() => props.prop && formContext?.modelValue.value && getProp(formContext.modelValue.value, props.prop));
  const rule = computed<MaybeNull<ZodType>>(() => {
    if (!props.prop || !formContext?.props?.rules) {
      return null;
    }

    const ruleValue = getProp(formContext.props.rules, props.prop);

    return ruleValue instanceof z.ZodType ? ruleValue : null;
  });
  const isValidatable = computed<boolean>(() => !!rule.value);
  const isRequired = computed<boolean>(() => {
    if (!rule.value) {
      return false;
    }

    return !rule.value.safeParse(undefined).success;
  });

  async function validate (silent = false): Promise<boolean> {
    if (!props.prop) {
      return false;
    }

    if (!modelValue.value && !props.prop && !rule.value) {
      return false;
    }

    if (!rule.value) {
      return false;
    }

    const schema = z.object({
      [props.prop]: toRaw(rule.value)
    });

    validationStatus.value.isValidating = true;

    const result = await schema.safeParseAsync({
      [props.prop]: toRaw(modelValue.value)
    });

    validationStatus.value.isValidating = false;

    if (result.success) {
      validationStatus.value.isError = false;
      validationStatus.value.isSuccess = true;

      return true;
    } else {
      if (!silent) {
        validationStatus.value.isError = true;
        validationStatus.value.isSuccess = false;

        if (result.error) {
          validationErrors.value = result.error.issues;
        }
      }

      return false;
    }
  }

  function clearValidate () {
    validationErrors.value = [];
  }

  function registerField (child: IVFormItemField) {
    if (props.prop) {
      field.value = child;
    }
  }

  function unregisterField () {
    field.value = undefined;
  }

  function reset () {
    if (!modelValue.value || !props.prop) {
      return;
    }

    field.value?.reset();

    clearValidate();
  }

  watch(modelValue, () => validate());

  watch(() => validationStatus.value.isSuccess, boolean => {
    if (boolean) {
      clearValidate();
    }
  });

  return {
    id,
    validationErrors,
    validationStatus,
    isRequired,
    isValidatable,
    isDisabled,
    validate,
    clearValidate,
    reset,
    registerField,
    unregisterField,
  };
}
