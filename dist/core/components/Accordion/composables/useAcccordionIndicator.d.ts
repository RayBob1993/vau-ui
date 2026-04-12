import type { ConfigProviderRootContext, IconRenderFn } from '../../ConfigProvider';
import type { Maybe, MaybeNull } from '../../../types';
import type { AccordionItemContext } from '../types';
export interface UseAccordionIndicatorOptions {
    accordionItemContext?: MaybeNull<AccordionItemContext>;
    configProviderRootContext?: MaybeNull<ConfigProviderRootContext>;
}
export declare function useAccordionIndicator(options: UseAccordionIndicatorOptions): {
    isActive: import("vue").ComputedRef<boolean>;
    icon: import("vue").ComputedRef<Maybe<IconRenderFn>>;
};
