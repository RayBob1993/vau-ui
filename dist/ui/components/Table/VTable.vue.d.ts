import { IVTableProps, IVTableBaseData, IVTableExpose } from './types';
import { VNodeProps, AllowedComponentProps, ComponentCustomProps, PublicProps, ShallowUnwrapRef, VNode } from 'vue';
import { UnscopedSlot } from '../../..';
declare const _default: <T extends IVTableBaseData = IVTableBaseData>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly onSort?: (() => any) | undefined;
        readonly onSelect?: ((payload: T) => any) | undefined;
        readonly "onSelect:all"?: ((payload: T[]) => any) | undefined;
    } & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>, "onSelect" | "onSort" | "onSelect:all"> & IVTableProps<T> & Partial<{}>> & PublicProps;
    expose(exposed: ShallowUnwrapRef<IVTableExpose>): void;
    attrs: any;
    slots: Readonly<{
        default?: UnscopedSlot;
        empty?: UnscopedSlot;
    } & { [K in keyof T]?: ((props: {
        row: T;
    }) => Array< VNode>) | undefined; }> & {
        default?: UnscopedSlot;
        empty?: UnscopedSlot;
    } & { [K in keyof T]?: ((props: {
        row: T;
    }) => Array< VNode>) | undefined; };
    emit: ((evt: "sort") => void) & ((evt: "select", payload: T) => void) & ((evt: "select:all", payload: T[]) => void);
}>) => VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
