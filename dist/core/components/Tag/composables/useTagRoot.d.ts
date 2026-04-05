import { TagProps, TagValue } from '../types';
import { Maybe } from '../../../types';
import { MaybeRefOrGetter } from 'vue';
export interface UseTagRootOptions {
    props: MaybeRefOrGetter<TagProps>;
    onDelete?: (value: Maybe<TagValue>) => void;
}
export declare function useTagRoot(options: UseTagRootOptions): {
    handleDelete: () => void;
};
