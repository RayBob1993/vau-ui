import type { ISizeProp, IThemeProp } from '../../../types';
import type { Maybe, MaybeNull, ValueOf } from '@vau/core';
import type { TemplateRef } from 'vue';
import { InputModes, InputNativeTypes, InputTypes } from '../../../constants';

export type IVInputModelValue = MaybeNull<Maybe<string>>;

export type IVInputNative = HTMLInputElement | HTMLTextAreaElement;

export type IVInputBaseProps = {
  disabled?: boolean;
  readonly?: boolean;
  autocomplete?: string;
} & Partial<IThemeProp> & Partial<ISizeProp>;

export interface IVInputProps extends IVInputBaseProps {
  type?: ValueOf<typeof InputTypes>;
  nativeType?: ValueOf<typeof InputNativeTypes>;
  inputMode?: ValueOf<typeof InputModes>;
}

export interface IVInputExpose {
  input: TemplateRef<IVInputNative>;
  focus: () => void;
}

export interface IVInputInstance {
  input: MaybeNull<IVInputNative>;
  focus: () => void;
}
