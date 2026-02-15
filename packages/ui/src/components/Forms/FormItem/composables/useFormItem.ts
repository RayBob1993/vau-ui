import type { IVFormItemField, IVFormItemProps, IVFormItemValidationStatus } from '../types';
import type { IVFormContext, IVFormModelValues } from '../../Form';
import type { $ZodIssue } from 'zod/v4/core';
import { getProp, type MaybeNull } from '@vau/core';
import { computed, ref, useId, toRaw, watch, shallowRef } from 'vue';
import { z, type ZodType } from 'zod';

export interface IUseFormItem {
  context: MaybeNull<IVFormContext>;
  props: IVFormItemProps;
}

export function useFormItem (options: IUseFormItem) {
  const id = useId();

  const validationErrors = ref<Array<$ZodIssue>>([]);
  const field = shallowRef<IVFormItemField>();

  const validationStatus = ref<IVFormItemValidationStatus>({
    isError: false,
    isValidating: false,
    isSuccess: false
  });

  const isDisabled = computed<boolean>(() => Boolean(options.props.disabled || options.context?.props.disabled));

  const modelValue = computed<IVFormModelValues>(() => {
    return options.props.name && options.context?.modelValue.value && getProp(options.context.modelValue.value, options.props.name);
  });

  const rule = computed<MaybeNull<ZodType>>(() => {
    if (!options.props.name || !options.context?.props?.rules) {
      return null;
    }

    const ruleValue = getProp(options.context.props.rules, options.props.name);

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
    if (!options.props.name) {
      return false;
    }

    if (!modelValue.value && !rule.value) {
      return false;
    }

    if (!rule.value) {
      return false;
    }

    const schema = z.object({
      [options.props.name]: toRaw(rule.value)
    });

    validationStatus.value.isValidating = true;

    const result = await schema.safeParseAsync({
      [options.props.name]: toRaw(modelValue.value)
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
    if (options.props.name) {
      field.value = child;
    }
  }

  function unregisterField () {
    field.value = undefined;
  }

  function reset () {
    if (!modelValue.value || !options.props.name) {
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
