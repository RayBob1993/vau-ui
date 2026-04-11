import type { ConfigProviderRootContext, IconRenderFn } from '../../ConfigProvider';
import type { Maybe, MaybeNull } from '../../../types';
import type { AccordionItemContext } from '../types';
import { computed, toValue } from 'vue';

export interface UseAccordionIndicatorOptions {
  accordionItemContext?: MaybeNull<AccordionItemContext>;
  configProviderRootContext?: MaybeNull<ConfigProviderRootContext>;
}

export function useAccordionIndicator (options: UseAccordionIndicatorOptions) {
  const isActive = computed<boolean>(() => Boolean(toValue(options.accordionItemContext?.isActive)));

  const icon = computed<Maybe<IconRenderFn>>(() => {
    const ctx = options.configProviderRootContext;

    if (!ctx) {
      return undefined;
    }

    return isActive.value
      ? toValue(ctx.props).icons?.accordionActive
      : toValue(ctx.props).icons?.accordionInactive;
  });

  return {
    isActive,
    icon
  };
}
