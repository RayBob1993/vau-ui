import { IVAffixProps } from '../types';
import { TemplateRef } from 'vue';
export interface IUseAffixOptions {
    props: IVAffixProps;
    root: TemplateRef<HTMLDivElement>;
    content: TemplateRef<HTMLDivElement>;
}
export declare function useAffix(options: IUseAffixOptions): {};
