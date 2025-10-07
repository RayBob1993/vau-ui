import { VConfigProviderContextKey } from './key';
import { inject } from 'vue';

export const useConfigProviderContext = () => inject(VConfigProviderContextKey,{
  direction: 'ltr',
  teleportTarget: 'body'
});
