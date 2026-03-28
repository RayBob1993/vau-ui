import type { IVBadgeProps } from '../types';
import { computed } from 'vue';
import { isNumber } from '@vau/core';

export interface IUseBadgeOptions {
  props: IVBadgeProps;
}

export function useBadge (options: IUseBadgeOptions) {
  const content = computed<string>(() => {
    if (options.props.dot) {
      return '';
    }

    if (isNumber(options.props.value) && isNumber(options.props.max)) {
      return options.props.max < options.props.value ? `${options.props.max}+` : `${options.props.value}`;
    }

    return `${options.props.value}`;
  });

  return {
    content
  };
}
