import { InputCodeRootContext } from '../types';
import { MaybeNull } from '../../../../types';
export interface UseInputCodePinOptions {
    inputCodeRootContext: MaybeNull<InputCodeRootContext>;
}
/**
 * Composable для части Pin компонента InputCode.
 * Возвращает isDisabled из контекста Root для привязки к полю ввода и aria-атрибутам.
 */
export declare function useInputCodePin(options: UseInputCodePinOptions): {
    isDisabled: import('vue').ComputedRef<boolean>;
};
