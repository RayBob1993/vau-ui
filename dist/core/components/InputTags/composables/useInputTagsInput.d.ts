import { InputTagsRootContext } from '../types';
import { MaybeNull } from '../../../types';
export interface UseInputTagsInputOptions {
    inputTagsRootContext: MaybeNull<InputTagsRootContext>;
}
export declare function useInputTagsInput(options: UseInputTagsInputOptions): {
    handleEnter: (event: Event) => void;
    handleTab: (event: Event) => void;
};
