import { VConfigProviderContextKey } from './key';
import { ru } from '../../../locale';
import { inject } from 'vue';

export const useConfigProviderContext = () => inject(VConfigProviderContextKey,{
  locale: ru,
  direction: 'ltr',
  teleportTarget: 'body'
});
