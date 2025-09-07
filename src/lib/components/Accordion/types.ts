import type { ModelRef } from 'vue';

export type IVAccordionValue = string | number;
export type IVAccordionModelValue = IVAccordionValue | Array<IVAccordionValue> | null | undefined;

export interface IVAccordionProps {
  multiple?: boolean;
}

export interface IVAccordionEmits {
  (event: 'change', payload: IVAccordionValue | undefined): void;
}

export interface IVAccordionItemProps {
  value: IVAccordionValue;
  title?: string;
  disabled?: boolean;
}

export interface IVAccordionItemSlots {
  default?: () => void;
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
  handleChange: (value: IVAccordionValue | undefined) => void;
}
