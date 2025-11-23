import type { IVBadgeProps } from '../types';
import { computed } from 'vue';
import { isNumber } from '@vau/core';

export function useBadge (props: IVBadgeProps) {
  const content = computed<string>(() => {
    if (props.isDot) {
      return '';
    }

    if (isNumber(props.value) && isNumber(props.max)) {
      return props.max < props.value ? `${props.max}+` : `${props.value}`;
    }

    return `${props.value}`;
  });

  return {
    content
  };
}
