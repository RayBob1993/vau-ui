import type { BadgeProps } from '../types';
import type { MaybeRefOrGetter } from 'vue';
import { computed, toValue } from 'vue';

export interface UseBadgeRootOptions {
  props: MaybeRefOrGetter<BadgeProps>;
}

export function useBadgeRoot (options: UseBadgeRootOptions) {
  const props = computed<BadgeProps>(() => toValue(options.props));

  return {};
}
