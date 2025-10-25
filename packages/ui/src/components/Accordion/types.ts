import type { ModelRef } from 'vue';
import type { Maybe, MaybeArray, MaybeNull } from '@vau/core';
import type { ISizeProp, IThemeProp } from '../../types';

export type IVAccordionValue = string | number;
export type IVAccordionModelValue = Maybe<MaybeNull<MaybeArray<IVAccordionValue>>>;

/**
 * Интерфейс свойств компонента VAccordion
 * @interface IVAccordionProps
 */
export type IVAccordionProps = {
  multiple?: boolean;
} & Partial<ISizeProp> & Partial<IThemeProp>;

/**
 * Интерфейс событий компонента VAccordion
 * @interface IVAccordionEmits
 */
export interface IVAccordionEmits {
  change: [payload: Maybe<IVAccordionValue>];
}

/**
 * Интерфейс событий компонента VAccordionItem
 * @interface IVAccordionItemProps
 */
export type IVAccordionItemProps = {
  value: IVAccordionValue;
  title?: string;
  disabled?: boolean;
} & Partial<ISizeProp> & Partial<IThemeProp>;

/**
 * Интерфейс слотов компонента VAccordionItem
 * @interface IVAccordionItemSlots
 */
export interface IVAccordionItemSlots {
  default?: VoidFunction;
  icon?: (props: {
    isActive: boolean
  }) => void;
  header?: (props: {
    isActive: boolean
  }) => void;
}

/**
 * Интерфейс контекста компонента VAccordion
 * @interface IVAccordionContext
 */
export interface IVAccordionContext {
  props: IVAccordionProps
  modelValue: ModelRef<IVAccordionModelValue>;
  handleChange: (value: Maybe<IVAccordionValue>) => void;
}
