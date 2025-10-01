import type { Ref } from 'vue';
import type { IVFormItemInstance } from '../../FormItem/types';
import { useScrollTo } from '../../../../composables';

interface IUseFormErrorScrollPayload {
  formItems: Ref<Array<IVFormItemInstance>>;
  scrollIntoViewOptions: ScrollIntoViewOptions;
}

export function useFormErrorScroll ({ formItems, scrollIntoViewOptions }: IUseFormErrorScrollPayload) {
  function scrollToErrorField () {
    const invalidFormItem = formItems.value.find(formItem => formItem.validationStatus.value.isError);

    if (!invalidFormItem) {
      return;
    }

    const el = invalidFormItem?.el;

    if (!el) {
      return;
    }

    useScrollTo(el, scrollIntoViewOptions);
  }

  return {
    scrollToErrorField
  };
}
