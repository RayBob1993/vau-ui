import type { IVTabContext } from '../types';
import { ref } from 'vue';

export function useTabs () {
  const tabs = ref<Array<IVTabContext>>([]);

  function registerTab (newTab: IVTabContext) {
    if (!tabs.value.find(tab => tab.id === newTab.id)) {
      tabs.value.push(newTab);
    }
  }

  function unregisterTab (oldTab: IVTabContext) {
    tabs.value = tabs.value.filter(tab => tab.id !== oldTab.id);
  }

  return {
    tabs,
    registerTab,
    unregisterTab
  };
}
