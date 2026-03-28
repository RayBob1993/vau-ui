import type { VNode } from 'vue';

/**
 * Интерфейс свойств компонента VCountdown
 * @interface IVCountdownProps
 */
export interface IVCountdownProps {
  autoStart?: boolean;
  interval?: number;
  start: number;
  now?: number;
}

export interface IVCountdownProgress {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  totalMilliseconds: number;
}

/**
 * Интерфейс событий компонента VCountdown
 * @interface IVCountdownEmits
 */
export interface IVCountdownEmits {
  start: [];
  progress: [payload: IVCountdownProgress];
  abort: [];
  end: [];
}

/**
 * Интерфейс слотов компонента VCountdown
 * @interface IVCountdownSlots
 */
export interface IVCountdownSlots {
  default?: (props: {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  }) => Array<VNode>;
}

export interface IVCountdownExpose {
  start: VoidFunction;
  abort: VoidFunction;
  end: VoidFunction;
  restart: VoidFunction;
}

export type IVCountdownInstance = IVCountdownExpose;
