import { IVCountdownProps, IVCountdownSlots, IVCountdownProgress } from './types';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<IVCountdownSlots> & IVCountdownSlots;
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<IVCountdownProps, {
    start: VoidFunction;
    abort: VoidFunction;
    end: VoidFunction;
    restart: VoidFunction;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    start: () => any;
    end: () => any;
    progress: (payload: IVCountdownProgress) => any;
    abort: () => any;
}, string, PublicProps, Readonly<IVCountdownProps> & Readonly<{
    onStart?: (() => any) | undefined;
    onEnd?: (() => any) | undefined;
    onProgress?: ((payload: IVCountdownProgress) => any) | undefined;
    onAbort?: (() => any) | undefined;
}>, {
    interval: number;
    now: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
