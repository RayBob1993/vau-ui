import type { CalendarProps } from '../types';
import { computed, toValue, type MaybeRefOrGetter } from 'vue';

export interface UseCalendarRootOptions {
  props: MaybeRefOrGetter<CalendarProps>;
}

export function useCalendarRoot (options: UseCalendarRootOptions) {
  const props = computed<CalendarProps>(() => toValue(options.props));

  console.log(props);

  return {};
}
