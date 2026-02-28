import type { Maybe, MaybeNull } from '../../../../types';
import type { FormContext, FormItemProps, FormModelValues, FormItemInstance, FormModel, FormRules } from '../types';
import { useFormField } from './useFormField';
import { useFormItemValidation } from './useFormItemValidation';
import { getProp } from '../../../../utils';
import { z, type ZodType } from 'zod';
import { computed, type MaybeRefOrGetter, onMounted, onUnmounted, toValue, useId, watch } from 'vue';

export interface IUseFormItem {
  context: MaybeNull<FormContext>;
  props: MaybeRefOrGetter<FormItemProps>;
  onValid?: VoidFunction;
  onInvalid?: VoidFunction;
}

export function useFormItem (options: IUseFormItem) {
  const id = useId();

  const { field, registerField, unregisterField } = useFormField();

  const props = computed<FormItemProps>(() => toValue(options.props));

  const name = computed<Maybe<string>>(() => props.value.name);

  const modelValue = computed<Maybe<FormModel>>(() => options.context?.modelValue.value);

  const rules = computed<Maybe<FormRules<FormModel>>>(() => options.context?.props?.rules);

  const value = computed<FormModelValues>(() => name.value && modelValue.value && getProp(modelValue.value, name.value));

  const isDisabled = computed<boolean>(() => Boolean(props.value.disabled || options.context?.props.disabled));

  const rule = computed<MaybeNull<ZodType>>(() => {
    if (!name.value || !rules.value) {
      return null;
    }

    const ruleValue = getProp(rules.value, name.value);

    return ruleValue instanceof z.ZodType ? ruleValue : null;
  });

  const isValidatable = computed<boolean>(() => Boolean(rule.value));

  const isRequired = computed<boolean>(() => {
    if (!rule.value) {
      return false;
    }

    return !rule.value.safeParse(undefined).success;
  });

  const {
    validationStatus,
    validationErrors,
    clearValidateErrors,
    validate
  } = useFormItemValidation({
    data: () => {
      if (!name.value) {
        return null;
      }

      return ({
        [name.value]: value.value
      });
    },
    schema: () => {
      if (!name.value || !rule.value) {
        return null;
      }

      return z.object({
        [name.value]: rule.value
      });
    },
    onValid: () => {
      options.onValid?.();
    },
    onInvalid: () => {
      options.onInvalid?.();
    }
  });

  const instance = computed<FormItemInstance>(() => ({
    id,
    props: props.value,
    validationStatus: validationStatus.value,
    isValidatable: isValidatable.value,
    isRequired: isRequired.value,
    registerField,
    unregisterField,
    reset,
    validate,
    clearValidateErrors
  }));

  function reset () {
    if (!value.value || !props.value.name) {
      return;
    }

    field.value?.reset();

    clearValidateErrors();
  }

  onMounted(() => {
    options.context?.registerFormItem(instance.value);
  });

  onUnmounted(() => {
    options.context?.unregisterFormItem(id);
  });

  watch(value, () => validate());

  watch(() => validationStatus.value.isSuccess, boolean => {
    if (boolean) {
      clearValidateErrors();
    }
  });

  return {
    id,
    validationErrors,
    validationStatus,
    isDisabled,
    isRequired,
    reset,
    validate,
    clearValidateErrors,
    registerField,
    unregisterField,
  };
}
