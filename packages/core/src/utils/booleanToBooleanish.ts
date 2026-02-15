import type { Booleanish } from '../types';

/**
 * Преобразует boolean в Booleanish тип
 * @param value - булево значение
 * @returns Booleanish значение
 */
export function booleanToBooleanish (value: boolean): Booleanish {
  if (value) {
    return 'true';
  }

  return 'false';
}
