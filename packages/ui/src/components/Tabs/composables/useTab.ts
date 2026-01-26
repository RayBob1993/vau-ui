import type { MaybeNull } from '@vau/core';
import type { IVTabsContext, IVTabProps } from '../types';
import { computed, useId } from 'vue';

export interface IUseTabOptions {
  context: MaybeNull<IVTabsContext>;
  props: IVTabProps;
}

export function useTab (options: IUseTabOptions) {
  const id = useId();

  const isActive = computed<boolean>(() => options.context?.modelValue.value === options.props.value);

  return {
    id,
    isActive
  };
}
