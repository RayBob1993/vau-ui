import { CheckboxRootContextKey } from './key';
import { inject } from 'vue';

export function useCheckboxRootContext () {
  return inject(CheckboxRootContextKey, null);
}
