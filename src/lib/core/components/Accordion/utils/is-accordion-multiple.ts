import type { AccordionValue, AccordionModelValue } from '../types';

export function isAccordionMultiple (value: AccordionModelValue, multiple = false): value is Array<AccordionValue> {
  return multiple && Array.isArray(value);
}
