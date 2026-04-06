import type { InputNativeType, InputProps } from '../Input';
export type InputPasswordProps = Omit<InputProps, 'type' | 'nativeType' | 'inputMode' | 'cols' | 'rows'>;
export type InputPasswordNativeType = Extract<InputNativeType, 'text' | 'password'>;
