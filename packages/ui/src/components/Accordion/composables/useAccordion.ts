import type { IVAccordionModelValue, IVAccordionProps, IVAccordionValue } from '../types';
import type { Maybe } from '@vau/core';
import { type MaybeRefOrGetter, toValue } from 'vue';

export interface IUseAccordionOptions {
  props: IVAccordionProps;
  modelValue: MaybeRefOrGetter<IVAccordionModelValue>;
  onChange?: (payload: Maybe<IVAccordionValue>) => void;
  onChangeModel?: (payload: IVAccordionModelValue) => void;
}

export function useAccordion (options: IUseAccordionOptions) {
  function handleChange (value: Maybe<IVAccordionValue>) {
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
