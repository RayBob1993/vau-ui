import { MaybeRefOrGetter, VNode } from 'vue';
import { SizeProp, ThemeProp, DirectionProp, Maybe } from '../../../types';
export type RadioValue = number | string;
export type RadioModelValue = Maybe<RadioValue>;
export type RadioProps = {
    disabled?: boolean;
    value: RadioValue;
} & Partial<ThemeProp> & Partial<SizeProp>;
export interface RadioEmits {
    change: [value: RadioValue];
}
export interface RadioIndicatorScopedSlots {
    isDisabled: boolean;
    isActive: boolean;
    isValid: boolean;
    isInvalid: boolean;
}
export interface RadioIndicatorSlots {
    default?: (props: RadioIndicatorScopedSlots) => Array<VNode>;
}
export interface RadioRootContext {
    props: MaybeRefOrGetter<RadioProps>;
    modelValue: MaybeRefOrGetter<RadioModelValue>;
    isActive: MaybeRefOrGetter<boolean>;
    isDisabled: MaybeRefOrGetter<boolean>;
    isValid: MaybeRefOrGetter<boolean>;
    isInvalid: MaybeRefOrGetter<boolean>;
}
export type RadioGroupProps = Partial<DirectionProp>;
