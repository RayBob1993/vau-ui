import type { MaybeRefOrGetter } from 'vue';
import type { ThemeProp, SizeProp } from '../../types';

export type AlertProps = Partial<ThemeProp> & Partial<Pick<SizeProp, 'size'>>;

export interface AlertRootContext {
  props: MaybeRefOrGetter<AlertProps>;
}
