import type { OptionInstance } from '../types';
import type { Maybe } from '../../../../types';
import { ref } from 'vue';

export function useSelectOptions () {
  const options = ref<Array<OptionInstance>>([]);

  function registerOption (newOption: OptionInstance) {
    const option: Maybe<OptionInstance> = options.value.find(option => option.id === newOption.id);

    if (option) {
      return;
    }

    options.value.push(newOption);
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
