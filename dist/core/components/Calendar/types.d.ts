import type { MaybeRefOrGetter } from 'vue';
export type CalendarWeekDayFormat = 'narrow' | 'short' | 'long';
export interface CalendarProps {
    disabled?: boolean;
    readonly?: boolean;
    multiple?: boolean;
}
export interface CalendarRootContext {
    props: MaybeRefOrGetter<CalendarProps>;
}
