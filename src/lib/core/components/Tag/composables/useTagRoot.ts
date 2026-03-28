import type { TagProps, TagValue } from '../types';
import type { Maybe } from '../../../types';
import { computed, type MaybeRefOrGetter, toValue } from 'vue';

export interface UseTagRootOptions {
  props: MaybeRefOrGetter<TagProps>;
  onDelete?: (value: Maybe<TagValue>) => void;
}

export function useTagRoot (options: UseTagRootOptions) {
  const props = computed<TagProps>(() => toValue(options.props));

  function handleDelete () {
    options.onDelete?.(props.value.value);
  }

  return {
    handleDelete
  };
}
