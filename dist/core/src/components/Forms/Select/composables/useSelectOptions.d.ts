import { OptionInstance } from '../types';
export declare function useSelectOptions(): {
    options: import('vue').Ref<{
        id: string;
        props: {
            value: import('../types').OptionValue;
            title?: string | undefined;
            disabled?: boolean | undefined;
        };
    }[], OptionInstance[] | {
        id: string;
        props: {
            value: import('../types').OptionValue;
            title?: string | undefined;
            disabled?: boolean | undefined;
        };
    }[]>;
    registerOption: (newOption: OptionInstance) => void;
    unregisterOption: (id: string) => void;
};
