import type { OptionInstance, SelectRootContext, SelectProps, OptionValue } from '../types';
import type { Maybe, MaybeNull } from '../../../../types';
import { isSelectMultiple } from '../utils';
import { computed, toValue } from 'vue';

export interface UseSelectValueOptions {
  selectRootContext: MaybeNull<SelectRootContext>;
}

export function useSelectValue (options: UseSelectValueOptions) {
  const selectRootProps = computed<Maybe<SelectProps>>(() => toValue(options.selectRootContext?.props));

  const activeOption = computed<Maybe<OptionInstance>>(() => toValue(options.selectRootContext?.activeOption));

  const activeOptionValue = computed<Maybe<OptionValue>>(() => activeOption.value?.props?.title ?? activeOption.value?.props.value);

  const activeOptions = computed<Array<OptionInstance>>(() => toValue(options.selectRootContext?.activeOptions) ?? []);

  const hasValue = computed<boolean>(() => Boolean(toValue(options.selectRootContext?.hasValue)));

  const isMultiple = computed<boolean>(() => isSelectMultiple(toValue(options.selectRootContext?.modelValue), Boolean(selectRootProps.value?.multiple)));

  const placeholder = computed<Maybe<string>>(() => selectRootProps.value?.placeholder);

  function toggle () {
    options.selectRootContext?.toggle();
  }

  return {
    activeOptionValue,
    activeOptions,
    hasValue,
    isMultiple,
    placeholder,
    toggle
  };
}
