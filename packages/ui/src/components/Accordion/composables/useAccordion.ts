import type { IVAccordionModelValue, IVAccordionProps, IVAccordionValue } from '../types';
import type { ModelRef } from 'vue';
import type { Maybe } from '@vau/core';

export interface IUseAccordionOptions {
  props: IVAccordionProps;
  modelValue: ModelRef<IVAccordionModelValue>;
  onChange?: (payload: Maybe<IVAccordionValue>) => void;
  onChangeModel?: (payload: IVAccordionModelValue) => void;
}

export function useAccordion (options: IUseAccordionOptions) {
  function handleChange (value: Maybe<IVAccordionValue>) {
    if (options.props.multiple && Array.isArray(options.modelValue.value)) {
      if (!value) {
        return;
      }

      const items = new Set(options.modelValue.value);

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
