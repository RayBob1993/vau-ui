import { OptionInstance } from '../types';
import { Ref } from 'vue';
import { OptionValue } from '..';
export declare function useSelectOptions(): {
    options: Ref<{
        id: string;
        props: {
            value: OptionValue;
            title?: string | undefined;
            disabled?: boolean | undefined;
        };
    }[], OptionInstance[] | {
        id: string;
        props: {
            value: OptionValue;
            title?: string | undefined;
            disabled?: boolean | undefined;
        };
    }[]>;
    registerOption: (newOption: OptionInstance) => void;
    unregisterOption: (id: string) => void;
};
