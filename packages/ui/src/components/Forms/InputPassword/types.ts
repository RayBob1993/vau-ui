import type { IVInputNativeType, IVInputProps } from '../Input/types';

/**
 * Интерфейс свойств компонента VInputPassword
 * @interface IVInputPasswordProps
 */
export type IVInputPasswordProps = Omit<IVInputProps, 'type' | 'nativeType' | 'inputMode'>;

export type IVInputPasswordNativeType = Extract<IVInputNativeType, 'text' | 'password'>;
