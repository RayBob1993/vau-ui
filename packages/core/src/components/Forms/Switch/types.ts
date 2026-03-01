import type { ISizeProp, IThemeProp } from '../../../types';
import type { MaybeRefOrGetter } from 'vue';

export type SwitchModelValue = boolean;

export type SwitchProps = {
  disabled?: boolean;
} & Partial<IThemeProp> & Partial<ISizeProp>;

export interface SwitchRootContext {
  props: MaybeRefOrGetter<SwitchProps>;
  isActive: MaybeRefOrGetter<SwitchModelValue>;
  isDisabled: MaybeRefOrGetter<boolean>;
  isValid: MaybeRefOrGetter<boolean>;
  isInvalid: MaybeRefOrGetter<boolean>;
}
