import type { AccordionModelValue, AccordionProps, AccordionValue } from '../types';
import type { Maybe } from '../../../types';
import { type MaybeRefOrGetter, toValue } from 'vue';

export interface IUseAccordionOptions {
  props: AccordionProps;
  modelValue: MaybeRefOrGetter<AccordionModelValue>;
  onChange?: (payload: Maybe<AccordionValue>) => void;
  onChangeModel?: (payload: AccordionModelValue) => void;
}

export function useAccordion (options: IUseAccordionOptions) {
  function handleChange (value: Maybe<AccordionValue>) {
    const modelValue = toValue(options.modelValue);

    if (options.props.multiple && Array.isArray(modelValue)) {
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
    handleChange
  };
}
