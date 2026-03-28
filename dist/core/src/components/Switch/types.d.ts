import { SizeProp, ThemeProp } from '../../types';
import { MaybeRefOrGetter } from 'vue';
export type SwitchModelValue = boolean;
export type SwitchProps = {
    disabled?: boolean;
} & Partial<ThemeProp> & Partial<SizeProp>;
export interface SwitchRootContext {
    props: MaybeRefOrGetter<SwitchProps>;
    isActive: MaybeRefOrGetter<SwitchModelValue>;
    isDisabled: MaybeRefOrGetter<boolean>;
    isValid: MaybeRefOrGetter<boolean>;
    isInvalid: MaybeRefOrGetter<boolean>;
}
