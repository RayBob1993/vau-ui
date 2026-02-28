import type { Maybe } from '../../../../types';
import type { OptionInstance, SelectModelValue } from '../types';
import { isSelectMultiple } from '../utils';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';

export interface UseActiveSelectOptionsOptions {
  multiple: MaybeRefOrGetter<boolean>;
  modelValue: MaybeRefOrGetter<SelectModelValue>;
  options: MaybeRefOrGetter<Array<OptionInstance>>;
}

export function useActiveSelectOptions (options: UseActiveSelectOptionsOptions) {
  const multiple = computed<boolean>(() => toValue(options.multiple));
  const modelValue = computed<SelectModelValue>(() => toValue(options.modelValue));
  const selectOptions = computed<Array<OptionInstance>>(() => toValue(options.options));

  const activeOption = computed<Maybe<OptionInstance>>(() => selectOptions.value.find(option => option.props.value === modelValue.value));

  const activeOptions = computed<Array<OptionInstance>>(() => {
    if (!isSelectMultiple(modelValue.value, multiple.value)) {
      return [];
    }

    const valueSet = new Set(modelValue.value);

    return selectOptions.value.filter(option => valueSet.has(option.props.value));
  });

  return {
    activeOption,
    activeOptions
  };
}
