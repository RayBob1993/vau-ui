import type { IVFormRules } from '../../components';
import { markRaw } from 'vue';

export function defineFormRules <MODEL> (rules: IVFormRules<MODEL>): IVFormRules<MODEL> {
  return markRaw(rules);
}
