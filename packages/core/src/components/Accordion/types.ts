import type { MaybeRefOrGetter, VNode } from 'vue';
import type { Maybe, MaybeArray, MaybeNull, ISizeProp, IThemeProp } from '../../types';

export type AccordionValue = string | number;
export type AccordionModelValue = Maybe<MaybeNull<MaybeArray<AccordionValue>>>;

export type AccordionProps = {
  multiple?: boolean;
} & Partial<ISizeProp> & Partial<IThemeProp>;

export interface AccordionEmits {
  change: [payload: Maybe<AccordionValue>];
}

export interface AccordionItemProps {
  value: AccordionValue;
  disabled?: boolean;
}

export interface AccordionItemSlots {
  default?: (scope: {
    isActive: boolean;
  }) => Array<VNode>;
}

export interface AccordionRootContext {
  props: MaybeRefOrGetter<AccordionProps>;
  modelValue: MaybeRefOrGetter<AccordionModelValue>;
  setModelValue: (value: Maybe<AccordionValue>) => void;
}

export interface AccordionItemContext {
  props: MaybeRefOrGetter<AccordionItemProps>;
  isActive: MaybeRefOrGetter<boolean>;
}
