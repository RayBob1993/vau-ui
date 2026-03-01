import { RadioRootContextKey } from './key';
import { inject } from 'vue';

export const useRadioRootContext = () => inject(RadioRootContextKey, null);
