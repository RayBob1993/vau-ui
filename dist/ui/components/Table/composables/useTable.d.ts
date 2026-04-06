import type { IVTableProps, IVTableBaseData, IVTableSortDirection } from '../types';
export declare function useTable<T extends IVTableBaseData = IVTableBaseData>(props: IVTableProps<T>): {
    isHeaderVisible: import("vue").ComputedRef<boolean>;
    clearSelection: () => void;
    getSelectionRows: () => import("@vue/reactivity").UnwrapRefSimple<T>[];
    clearSort: () => void;
    sort: (prop: keyof T, order: IVTableSortDirection) => void;
    toggleAllSelection: () => void;
};
