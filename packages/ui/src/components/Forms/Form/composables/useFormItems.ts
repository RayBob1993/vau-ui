import type { IVFormItemInstance } from '../../FormItem';
import { ref } from 'vue';

export function useFormItems () {
  const formItems = ref<Array<IVFormItemInstance>>([]);

  function registerFormItem (newFormItem: IVFormItemInstance) {
    const formItem = formItems.value.find(formItem => formItem.id === newFormItem.id);

    if (!formItem) {
      formItems.value.push(newFormItem);
    }
  }

  function unregisterFormItem (id: string) {
    formItems.value = formItems.value.filter(formItem => formItem.id !== id);
  }

  return {
    formItems,
    registerFormItem,
    unregisterFormItem
  };
}
