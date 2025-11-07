import type { ValueOf } from '@vau/core';
import { TableLayout } from './constants';

/**
 * Базовый тип данных компонента VTable
 * @interface IVTableBaseData
 */
export type IVTableBaseData = Record<string, unknown>;

/**
 * Интерфейс свойств колонки VTable
 * @interface IVTableColumn
 */
export interface IVTableColumn <KEYS extends IVTableBaseData> {
  /**
   * @description Заголовок колонки
   */
  title?: string;
  /**
   * @description Имя свойства объекта, значение которого нужно отобразить в колонке
   */
  prop: keyof KEYS;
  /**
   * @description Указывает, можно ли сортировать столбец
   */
  sortable?: boolean;
}

/**
 * Интерфейс свойств компонента VTable
 * @interface IVTableProps
 * @template DATA - Тип данных строк таблицы
 */
export interface IVTableProps <DATA extends IVTableBaseData = IVTableBaseData> {
  /**
   * @description Описание колонок
   */
  columns: Array<IVTableColumn<DATA>>;
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
export interface IVTableEmits <DATA extends IVTableBaseData = IVTableBaseData> {
  select: [payload: DATA];
  'select:all': [payload: Array<DATA>];
  sort: [];
}

/**
 * Интерфейс слотов компонента VTable
 * @interface IVTableSlots
 */
export interface IVTableSlots <DATA extends IVTableBaseData = IVTableBaseData> {
  default?: () => never;
  empty?: () => never;
  // Динамические слоты
  [key: string]: ((props: {
    row: DATA;
  }) => never) | undefined;
}

/**
 * Интерфейс контекста компонента VTable
 * @interface IVTableContext
 */
export interface IVTableContext {
  props: IVTableProps;
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
export type IVTableInstance = IVTableExpose;
