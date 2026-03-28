/**
 * Интерфейс свойств компонента VImage
 * @interface IVImageProps
 */
export interface IVImageProps {
  src: string;
}

export interface IVImageEmits {
  error: [payload: Event];
  load: [payload: Event];
}
