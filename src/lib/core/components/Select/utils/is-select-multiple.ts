import type { OptionValue, SelectModelValue } from '../types';

export function isSelectMultiple (value: SelectModelValue, multiple = false): value is Array<OptionValue> {
  return multiple && Array.isArray(value);
}
