import type { IVFormItemInstance } from '../../FormItem';
import { type Maybe, useScrollTo } from '@vau/core';
import { type MaybeRefOrGetter, toValue } from 'vue';

interface IUseFormErrorScrollOptions {
  formItems: MaybeRefOrGetter<Array<IVFormItemInstance>>;
  scrollIntoViewOptions: ScrollIntoViewOptions;
}

export function useFormErrorScroll (options: IUseFormErrorScrollOptions) {
  function scrollToErrorField () {
    const formItem: Maybe<IVFormItemInstance> = toValue(options.formItems).find(formItem => formItem.validationStatus.isError);

    if (!formItem) {
      return;
    }

    const el = formItem?.el;

    if (!el) {
      return;
    }

    useScrollTo(el, scrollIntoViewOptions);
  }

  return {
    scrollToErrorField
  };
}
