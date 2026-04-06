import type { IVAffixProps } from '../types';
import { type TemplateRef } from 'vue';
export interface IUseAffixOptions {
    props: IVAffixProps;
    root: TemplateRef<HTMLDivElement>;
    content: TemplateRef<HTMLDivElement>;
}
export declare function useAffix(options: IUseAffixOptions): {};
