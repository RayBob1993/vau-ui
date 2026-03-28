import type { FormRules } from '../../components/Form/types';
import { markRaw } from 'vue';

export function defineFormRules <MODEL> (rules: FormRules<MODEL>): FormRules<MODEL> {
  return markRaw(rules);
}
