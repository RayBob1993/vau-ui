import { OptionInstance } from '../types';
export declare function useSelectOptions(): {
    options: import('vue').Ref<{
        id: string;
        props: {
            value: import('../types').OptionValue;
            disabled?: boolean | undefined;
        };
    }[], OptionInstance[] | {
        id: string;
        props: {
            value: import('../types').OptionValue;
            disabled?: boolean | undefined;
        };
    }[]>;
    registerOption: (newOption: OptionInstance) => void;
    unregisterOption: (id: string) => void;
};
