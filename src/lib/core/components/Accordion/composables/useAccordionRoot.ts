import type { AccordionModelValue, AccordionProps, AccordionValue } from '../types';
import type { Maybe } from '../../../types';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';

export interface UseAccordionRootOptions {
  props: MaybeRefOrGetter<AccordionProps>;
  modelValue: MaybeRefOrGetter<AccordionModelValue>;
  onChange?: (payload: Maybe<AccordionValue>) => void;
  onChangeModel?: (payload: AccordionModelValue) => void;
}

export function useAccordionRoot (options: UseAccordionRootOptions) {
  const props = computed<AccordionProps>(() => toValue(options.props));

  function setModelValue (value: Maybe<AccordionValue>) {
    const modelValue = toValue(options.modelValue);

    if (props.value.multiple && Array.isArray(modelValue)) {
      if (!value) {
        return;
      }

      const items = new Set(modelValue);

      if (items.has(value)) {
        items.delete(value);
      } else {
        items.add(value);
      }

      options?.onChangeModel?.([...items]);
    } else {
      options?.onChangeModel?.(value);
    }

    options?.onChange?.(value);
  }

  return {
    setModelValue
  };
}
