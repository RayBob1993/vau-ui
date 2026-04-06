import type { TagProps, TagValue } from '../types';
import type { Maybe } from '../../../types';
import { type MaybeRefOrGetter } from 'vue';
export interface UseTagRootOptions {
    props: MaybeRefOrGetter<TagProps>;
    onDelete?: (value: Maybe<TagValue>) => void;
}
export declare function useTagRoot(options: UseTagRootOptions): {
    handleDelete: () => void;
};
