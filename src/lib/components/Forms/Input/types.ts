import type { ISizeProp, IThemeProp, Maybe, MaybeNull, ValueOf } from '../../../types';
import type { TemplateRef } from 'vue';
import { InputModes, InputNativeTypes, InputTypes } from './constants';

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
