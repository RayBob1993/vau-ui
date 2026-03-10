import type { InputTagsRootContext } from '../types';
import type { MaybeNull } from '../../../../types';

export interface UseInputTagsInputOptions {
  inputTagsRootContext: MaybeNull<InputTagsRootContext>;
}

/**
 * Composable для части Input компонента InputTags.
 * Обработчики Enter/Tab добавляют введённое значение как тег через контекст (addTag) и очищают поле.
 */
export function useInputTagsInput (options: UseInputTagsInputOptions) {
  function handleEnter (event: Event) {
    const el = event.target as HTMLInputElement | null;
    if (!el) {
      return;
    }
    const value = el.value?.trim();
    if (value && options.inputTagsRootContext?.addTag) {
      options.inputTagsRootContext.addTag(value);
      el.value = '';
    }
    event.preventDefault();
  }

  function handleTab (event: Event) {
    const el = event.target as HTMLInputElement | null;
    if (!el) {
      return;
    }
    const value = el.value?.trim();
    if (value && options.inputTagsRootContext?.addTag) {
      options.inputTagsRootContext.addTag(value);
      el.value = '';
    }
  }

  return {
    handleEnter,
    handleTab
  };
}
