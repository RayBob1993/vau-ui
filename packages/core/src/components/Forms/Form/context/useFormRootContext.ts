import { FormRootContextKey } from './key';
import { inject } from 'vue';

export const useFormRootContext = () => inject(FormRootContextKey, null);
