import type { FormRules } from '../../components/Forms/Form/types';
import { markRaw } from 'vue';

export function defineFormRules <MODEL> (rules: FormRules<MODEL>): FormRules<MODEL> {
  return markRaw(rules);
}
