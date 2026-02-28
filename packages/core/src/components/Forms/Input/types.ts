import type { ISizeProp, IThemeProp, Maybe, MaybeNull, ValueOf } from '../../../types';
import type { ComputedRef, EmitFn, ModelRef } from 'vue';
import { InputModes, InputNativeTypes, InputTypes } from '../../../constants';

export type InputModelValue = MaybeNull<Maybe<string>>;

export type InputType = ValueOf<typeof InputTypes>;
export type InputNativeType = ValueOf<typeof InputNativeTypes>;
export type InputMode = ValueOf<typeof InputModes>;

export type InputBaseProps = {
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  autocomplete?: AutoFill;
} & Partial<IThemeProp> & Partial<ISizeProp>;

export interface InputNativeProps extends InputBaseProps {
  nativeType?: InputNativeType;
  inputMode?: InputMode;
}

export interface InputTextareaProps extends InputBaseProps {
  rows?: HTMLTextAreaElement['rows'];
  cols?: HTMLTextAreaElement['cols'];
}

export type InputProps = {
  type?: InputType;
  clearable?: boolean;
} & InputBaseProps & Partial<InputNativeProps> & Partial<InputTextareaProps>;

export interface InputEmits {
  click: [event: PointerEvent];
  dblclick: [event: MouseEvent];
  mousedown: [event: MouseEvent];
  mouseup: [event: MouseEvent];
  mouseenter: [event: MouseEvent];
  mouseleave: [event: MouseEvent];
  mousemove: [event: MouseEvent];
  mouseover: [event: MouseEvent];
  mouseout: [event: MouseEvent];
  contextmenu: [event: Event];
  focusin: [event: Event];
  focusout: [event: Event];
  change: [event: Event];
  blur: [event: Event];
  focus: [event: Event];
  keyup: [event: KeyboardEvent];
  keydown: [event: KeyboardEvent];
  keypress: [event: KeyboardEvent];
  paste: [event: ClipboardEvent];
  copy: [event: ClipboardEvent];
  cut: [event: ClipboardEvent];
}

export interface InputContext {
  props: InputProps;
  modelValue: ModelRef<InputModelValue>;
  isDisabled: ComputedRef<boolean>;
  setFocus: (payload: boolean) => void;
  emit: EmitFn<InputEmits>;
}
