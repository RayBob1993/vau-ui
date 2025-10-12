export interface ITableProps {
  data: Record<string, unknown>;
  tableLayout?: string;
}

export interface ITableColumnProps {
  title: string;
  prop: string;
  sortable?: boolean;
}

export interface IVTableContext {
  props: ITableProps;
}
