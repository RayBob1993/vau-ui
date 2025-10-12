import type { ModelRef } from 'vue';
import type { Maybe, MaybeArray, MaybeNull } from '@vau/core';

export type IVAccordionValue = string | number;
export type IVAccordionModelValue = Maybe<MaybeNull<MaybeArray<IVAccordionValue>>>;

export interface IVAccordionProps {
  multiple?: boolean;
}

export interface IVAccordionEmits {
  (event: 'change', payload: Maybe<IVAccordionValue>): void;
}

export interface IVAccordionItemProps {
  value: IVAccordionValue;
  title?: string;
  disabled?: boolean;
}

export interface IVAccordionItemSlots {
  default?: VoidFunction;
  icon?: (props: {
    isActive: boolean
  }) => void;
  header?: (props: {
    isActive: boolean
  }) => void;
}

export interface IVAccordionContext {
  props: IVAccordionProps
  modelValue: ModelRef<IVAccordionModelValue>;
  handleChange: (value: Maybe<IVAccordionValue>) => void;
}
