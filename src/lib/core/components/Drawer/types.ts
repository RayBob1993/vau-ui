import type { SizeProp } from '../../types';
import type { MaybeRefOrGetter } from 'vue';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

export type DrawerProps = {
  position?: DrawerPosition;
  appendToBody?: boolean;
  closeOnEscape?: boolean;
} & Partial<SizeProp>;

export interface DrawerEmits {
  opened: [payload: Element];
  closed: [payload: Element];
  open: [];
  close: [];
}

export interface DrawerRootContext {
  props: MaybeRefOrGetter<DrawerProps>;
  close: VoidFunction;
}
