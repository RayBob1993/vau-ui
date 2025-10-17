import type { ISizeProp, IThemeProp } from '../../../types';
import type { Maybe, MaybeNull, ValueOf } from '@vau/core';
import type { TemplateRef } from 'vue';
import { InputModes, InputNativeTypes, InputTypes } from '../../../constants';

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
} & Partial<IThemeProp> & Partial<ISizeProp>;

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

export interface IVInputExpose {
  input: TemplateRef<IVInputNative>;
  focus: VoidFunction;
}

export interface IVInputInstance {
  input: MaybeNull<IVInputNative>;
  focus: VoidFunction;
}
