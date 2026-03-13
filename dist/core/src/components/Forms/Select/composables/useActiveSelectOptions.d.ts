import { Maybe } from '../../../../types';
import { OptionInstance, SelectModelValue } from '../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseActiveSelectOptionsOptions {
    multiple: MaybeRefOrGetter<boolean>;
    modelValue: MaybeRefOrGetter<SelectModelValue>;
    options: MaybeRefOrGetter<Array<OptionInstance>>;
}
export declare function useActiveSelectOptions(options: UseActiveSelectOptionsOptions): {
    activeOption: import('vue').ComputedRef<Maybe<OptionInstance>>;
    activeOptions: import('vue').ComputedRef<OptionInstance[]>;
};
