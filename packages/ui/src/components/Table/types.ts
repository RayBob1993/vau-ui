/**
 * Интерфейс свойств компонента VTable
 * @interface IVTableProps
 */
export interface IVTableProps {
  data: Record<string, unknown>;
  tableLayout?: string;
}

/**
 * Интерфейс свойств компонента VTableColumn
 * @interface IVTableColumnProps
 */
export interface IVTableColumnProps {
  title: string;
  prop: string;
  sortable?: boolean;
}

/**
 * Интерфейс контекста компонента VTable
 * @interface IVTableColumnProps
 */
export interface IVTableContext {
  props: IVTableProps;
}
