import type { ValueOf } from '@vau/core';
import { TableLayout } from './constants';

/**
 * Базовый тип данных компонента IVTable
 * @interface IVTableBaseData
 */
export type IVTableBaseData = Record<string, unknown>;

/**
 * Интерфейс свойств компонента VTable
 * @interface IVTableProps
 * @template DATA - Тип данных строк таблицы
 */
export interface IVTableProps <DATA extends IVTableBaseData> {
  /**
   * @description Данные таблицы
   */
  data: Array<DATA>;
  /**
   * @description Формат заполнения колонок таблицы
   */
  tableLayout?: ValueOf<typeof TableLayout>;
  /**
   * @description Добавить скролл таблицы
   */
  scrollable?: boolean;
  /**
   * @description Сделать таблицу полосатой
   */
  stripe?: boolean;
}

/**
 * Интерфейс событий компонента VTable
 * @interface IVTableEmits
 */
export interface IVTableEmits {
  select: [];
  'select:all': [];
  'sort:change': [];
}

/**
 * Интерфейс слотов компонента VTable
 * @interface IVTableSlots
 */
export interface IVTableSlots {
  default?: () => never;
  empty?: () => never;
}

/**
 * Интерфейс свойств компонента VTableColumn
 * @interface IVTableColumnProps
 * @template T - Тип данных строк таблицы
 */
export interface IVTableColumnProps <T extends IVTableBaseData = IVTableBaseData> {
  /**
   * @description Заголовок колонки
   */
  title: string;
  /**
   * @description Свойство объекта, значение которого нужно отобразить в колонке
   */
  prop: keyof T;
  /**
   * @description Активация сортировки колонки
   */
  sortable?: boolean;
}

/**
 * Интерфейс контекста компонента VTable
 * @interface IVTableColumnProps
 */
export interface IVTableContext {
  props: IVTableProps<IVTableBaseData>;
}

/**
 * @interface IVTableExpose
 */
export interface IVTableExpose {
  /**
   * @description Очистить выделение строк
   */
  clearSelection: VoidFunction;
  /**
   * @description Получить выбранные строки в таблице
   */
  getSelectionRows: VoidFunction;
  /**
   * @description Очистить сортировкуь
   */
  clearSort: VoidFunction;
  /**
   * @description Указать сортировку по полю
   */
  sort: VoidFunction;
  /**
   * @description Выделить или снять выделение с всех строк
   */
  toggleAllSelection: VoidFunction;
}

/**
 * @interface IVTableInstance
 */
export interface IVTableInstance extends IVTableExpose {

}
