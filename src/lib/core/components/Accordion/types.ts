import type { MaybeRefOrGetter, VNode } from 'vue';
import type { Maybe, MaybeArray, SizeProp, ThemeProp } from '../../types';

export type AccordionValue = string | number;
export type AccordionSingleModelValue = Maybe<AccordionValue>;
export type AccordionMultipleModelValue = MaybeArray<AccordionValue>;
export type AccordionModelValue = AccordionSingleModelValue | AccordionMultipleModelValue;

export type AccordionProps = {
  multiple?: boolean;
} & Partial<SizeProp> & Partial<ThemeProp>;

export interface AccordionEmits {
  change: [payload: Maybe<AccordionValue>];
}

export interface AccordionItemProps {
  value: AccordionValue;
  disabled?: boolean;
}

export interface AccordionItemScopedSlot {
  isActive: boolean;
}

export interface AccordionItemSlots {
  default?: (scope: AccordionItemScopedSlot) => Array<VNode>;
}

export interface AccordionRootContext {
  props: MaybeRefOrGetter<AccordionProps>;
  modelValue: MaybeRefOrGetter<AccordionModelValue>;
  setModelValue: (value: Maybe<AccordionValue>) => void;
}

export interface AccordionItemContext {
  props: MaybeRefOrGetter<AccordionItemProps>;
  isActive: MaybeRefOrGetter<boolean>;
  handleToggle: VoidFunction;
}
