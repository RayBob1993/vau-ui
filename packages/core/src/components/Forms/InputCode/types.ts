import type { MaybeRefOrGetter } from 'vue';
import type { SizeProp, ThemeProp } from '../../../types';
import type { InputBaseProps } from '../../Forms';

export type InputCodeModelValue = string | number;

export type InputCodeProps = {

} & InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>;

export interface InputCodeRootContext {
  props: MaybeRefOrGetter<InputCodeProps>;
  isDisabled: MaybeRefOrGetter<boolean>;
}
