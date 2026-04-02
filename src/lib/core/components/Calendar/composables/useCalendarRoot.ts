import type { CalendarProps } from '../types';
import type { MaybeRefOrGetter } from 'vue';
import { computed, toValue } from 'vue';

export interface UseCalendarRootOptions {
  props: MaybeRefOrGetter<CalendarProps>;
}

export function useCalendarRoot (options: UseCalendarRootOptions) {
  const props = computed<CalendarProps>(() => toValue(options.props));

  return {};
}
