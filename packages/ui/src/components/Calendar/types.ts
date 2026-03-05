import type { ThemeProp, SizeProp } from '@vau/core';

/**
 * Интерфейс свойств компонента VCalendar
 * @interface IVCalendarProps
 */
export type IVCalendarProps = {
} & Partial<ThemeProp> & Partial<SizeProp>;
