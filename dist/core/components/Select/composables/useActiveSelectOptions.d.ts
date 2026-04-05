import { Maybe } from '../../../types';
import { OptionInstance, SelectModelValue } from '../types';
import { MaybeRefOrGetter, ComputedRef } from 'vue';
export interface UseActiveSelectOptionsOptions {
    multiple: MaybeRefOrGetter<boolean>;
    modelValue: MaybeRefOrGetter<SelectModelValue>;
    options: MaybeRefOrGetter<Array<OptionInstance>>;
}
export declare function useActiveSelectOptions(options: UseActiveSelectOptionsOptions): {
    activeOption: ComputedRef<Maybe<OptionInstance>>;
    activeOptions: ComputedRef<OptionInstance[]>;
};
