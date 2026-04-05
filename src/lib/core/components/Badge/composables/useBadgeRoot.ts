import type { BadgeProps } from '../types';
import { computed, toValue, type MaybeRefOrGetter } from 'vue';

export interface UseBadgeRootOptions {
  props: MaybeRefOrGetter<BadgeProps>;
}

export function useBadgeRoot (options: UseBadgeRootOptions) {
  const props = computed<BadgeProps>(() => toValue(options.props));

  console.log(props);

  return {};
}
