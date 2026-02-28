import { CheckboxRootContextKey } from './key';
import { inject } from 'vue';

export const useCheckboxRootContext = () => inject(CheckboxRootContextKey, null);
