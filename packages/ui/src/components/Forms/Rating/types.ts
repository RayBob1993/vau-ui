import type { UnscopedSlot } from '@vau/core';

export type IVRatingModelValue = number;

/**
 * Интерфейс свойств компонента VRating
 * @interface IVRatingProps
 */
export interface IVRatingProps {
  disabled?: boolean;
  readonly?: boolean;
  stars?: number;
  step?: number;
}

export interface IVRatingSlots {
  onIcon: UnscopedSlot;
  offIcon: UnscopedSlot;
}
