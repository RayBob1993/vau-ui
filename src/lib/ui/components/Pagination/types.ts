/**
 * Интерфейс свойств компонента VPagination
 * @interface IVPaginationProps
 */
export interface IVPaginationProps {
  total: number;
  current: number;
  perPage: number;
  range?: number;
  visibleMenu?: boolean;
  moreButton?: boolean;
}

/**
 * Интерфейс событий компонента VPagination
 * @interface IVPaginationEmits
 */
export interface IVPaginationEmits {
  change: [payload: number];
  load: [payload: number];
}

export interface IVPaginationExpose {
  goToFirstPage: VoidFunction;
  goToPrevPage: VoidFunction;
  setPage: (page: number) => void;
  goToNextPage: VoidFunction;
  goToLastPage: VoidFunction;
}

export type IVPaginationInstance = IVPaginationExpose;
