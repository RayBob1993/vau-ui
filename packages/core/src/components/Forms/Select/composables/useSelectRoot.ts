import type { SelectProps, SelectModelValue, OptionValue } from '../types';
import type { MaybeNull } from '../../../../types';
import type { FormRootContext, FormItemContext } from '../../Form';
import { useSelectOptions } from './useSelectOptions';
import { useActiveSelectOptions } from './useActiveSelectOptions';
import { useToggle } from '../../../../composables';
import { isSelectMultiple } from '../utils';
import { computed, type MaybeRefOrGetter, onUnmounted, toValue } from 'vue';

export interface IUseSelectOptions {
  formRootContext: MaybeNull<FormRootContext>;
  formItemContext: MaybeNull<FormItemContext>;
  modelValue: MaybeRefOrGetter<SelectModelValue>;
  props: MaybeRefOrGetter<SelectProps>;
  onChange?: (value: SelectModelValue) => void;
  onChangeModel?: (value: SelectModelValue) => void;
  onClear?: VoidFunction;
}

export function useSelectRoot (options: IUseSelectOptions) {
  const modelValue = computed<SelectModelValue>(() => toValue(options.modelValue));
  const props = computed<SelectProps>(() => toValue(options.props));

  const { options: selectOptions, registerOption, unregisterOption } = useSelectOptions();

  const { activeOption, activeOptions } = useActiveSelectOptions({
    multiple: () => Boolean(props.value.multiple),
    options: () => selectOptions.value,
    modelValue: () => modelValue.value
  });

  const [isOpen, setOpen, toggleOpen] = useToggle();

  const hasValue = computed<boolean>(() => {
    if (isSelectMultiple(modelValue.value, props.value.multiple)) {
      return modelValue.value.length > 0;
    }

    return Boolean(modelValue.value);
  });

  const isDisabled = computed<boolean>(() => {
    return Boolean(
      options.formRootContext?.props.disabled ||
      options.formItemContext?.props.disabled ||
      props.value?.disabled
    );
  });

  function handleChange (value: OptionValue) {
    if (isDisabled.value) {
      return;
    }

    if (isSelectMultiple(modelValue.value, props.value.multiple)) {
      const values: Set<OptionValue> = new Set<OptionValue>([...modelValue.value]);

      if (values.has(value)) {
        values.delete(value);
      } else {
        values.add(value);
      }

      options.onChangeModel?.([...values]);
      options.onChange?.([...values]);

      return;
    }

    options.onChangeModel?.(value);
    options.onChange?.(value);

    setOpen(false);
  }

  function reset () {
    if (isSelectMultiple(modelValue.value, props.value.multiple)) {
      options.onChangeModel?.([]);
      options.onChange?.([]);

      return;
    }

    options.onChangeModel?.(undefined);
    options.onChange?.(undefined);
    options.onClear?.();
  }

  options.formItemContext?.registerField({
    reset
  });

  onUnmounted(() => {
    options.formItemContext?.unregisterField();
  });

  return {
    activeOption,
    activeOptions,
    hasValue,
    isOpen,
    isDisabled,
    toggleOpen,
    registerOption,
    unregisterOption,
    handleChange,
    reset
  };
}
