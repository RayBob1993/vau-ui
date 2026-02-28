import { FormItemContextKey } from './key';
import { inject } from 'vue';

export const useFormItemContext = () => inject(FormItemContextKey, null);
