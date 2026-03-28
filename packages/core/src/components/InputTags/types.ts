import type { InputBaseProps } from '../Input';
import type { SizeProp, ThemeProp } from '../../types';
import type { MaybeRefOrGetter } from 'vue';

export type InputTagsValue = string | number;
export type InputTagsModelValue = Array<InputTagsValue>;

export type InputTagsProps = InputBaseProps & Partial<ThemeProp> & Partial<SizeProp>;

export interface InputTagsEmits {
  addTag: [payload: InputTagsValue];
  removeTag: [payload: InputTagsValue];
}

export interface InputTagsRootContext {
  props: MaybeRefOrGetter<InputTagsProps>;
  modelValue: MaybeRefOrGetter<InputTagsModelValue>;
  isDisabled: MaybeRefOrGetter<boolean>;
}
