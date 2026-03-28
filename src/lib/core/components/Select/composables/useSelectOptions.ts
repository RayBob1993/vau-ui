import type { OptionInstance } from '../types';
import { ref } from 'vue';

export function useSelectOptions () {
  const options = ref<Array<OptionInstance>>([]);

  function registerOption (newOption: OptionInstance) {
    const index = options.value.findIndex(option => option.id === newOption.id);

    if (index === -1) {
      options.value.push(newOption);
    } else {
      options.value[index] = newOption;
    }
  }

  function unregisterOption (id: string) {
    options.value = options.value.filter(option => option.id !== id);
  }

  return {
    options,
    registerOption,
    unregisterOption
  };
}
