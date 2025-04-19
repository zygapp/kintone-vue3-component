import { KvcTableProps } from '../../types/component-types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`column-${any}`, (_: {}) => any>> & Partial<Record<any, (_: {
        index: number;
        row: Record<string, any>;
        width: any;
        column: any;
        value: any;
    }) => any>>;
    refs: {};
    rootEl: HTMLTableElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<KvcTableProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: any[]) => any;
    add: (value: any[], index: number) => any;
    delete: (value: any[]) => any;
}, string, import('vue').PublicProps, Readonly<KvcTableProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
    onAdd?: ((value: any[], index: number) => any) | undefined;
    onDelete?: ((value: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLTableElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
