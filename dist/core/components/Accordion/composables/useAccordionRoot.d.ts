import { AccordionModelValue, AccordionProps, AccordionValue } from '../types';
import { Maybe } from '../../../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseAccordionRootOptions {
    props: MaybeRefOrGetter<AccordionProps>;
    modelValue: MaybeRefOrGetter<AccordionModelValue>;
    onChange?: (payload: Maybe<AccordionValue>) => void;
    onChangeModel?: (payload: AccordionModelValue) => void;
}
export declare function useAccordionRoot(options: UseAccordionRootOptions): {
    setModelValue: (value: Maybe<AccordionValue>) => void;
};
