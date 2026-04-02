import { CalendarRootContextKey } from './key';
import { inject } from 'vue';

export function useCalendarRootContext () {
  return inject(CalendarRootContextKey, null);
}
