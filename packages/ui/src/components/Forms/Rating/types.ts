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
  onIcon: VoidFunction;
  offIcon: VoidFunction;
}
