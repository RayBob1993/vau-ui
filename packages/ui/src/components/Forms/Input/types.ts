import type { TemplateRef } from 'vue';
import  {
  type SizeProp,
  type ThemeProp,
  type Maybe,
  type MaybeNull,
  type ValueOf,
  type UnscopedSlot,
  InputModes,
  InputNativeTypes,
  InputTypes
} from '@vau/core';

export type IVInputModelValue = MaybeNull<Maybe<string>>;

export type IVInputNative = HTMLInputElement | HTMLTextAreaElement;
export type IVInputType = ValueOf<typeof InputTypes>;
export type IVInputNativeType = ValueOf<typeof InputNativeTypes>;
export type IVInputMode = ValueOf<typeof InputModes>;

/**
 * Интерфейс базовых свойств компонента VInput
 * @interface IVInputBaseProps
 */
export type IVInputBaseProps = {
  disabled?: boolean;
  readonly?: boolean;
  autocomplete?: string;
  clearable?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;

/**
 * Интерфейс свойств компонента VInput
 * @interface IVInputProps
 */
export interface IVInputProps extends IVInputBaseProps {
  type?: IVInputType;
  nativeType?: IVInputNativeType;
  inputMode?: IVInputMode;
  clearable?: boolean;
}

export interface IVInputSlots {
  default?: UnscopedSlot;
  before?: UnscopedSlot;
  after?: UnscopedSlot;
}

export interface IVInputExpose {
  input: TemplateRef<IVInputNative>;
  focus: VoidFunction;
}

export interface IVInputInstance {
  input: MaybeNull<IVInputNative>;
  focus: VoidFunction;
}
