import { KvcTableProps } from '../../types/component-types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`column-${any}`, (_: {}) => any>> & Partial<Record<any, (_: {
        index: number;
        row: Record<string, any>;
        width: any;
        column: any;
        value: any;
    }) => any>> & Partial<Record<any, (_: {
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
    delete: (value: any[]) => any;
    add: (value: any[], index: number) => any;
    "update:modelValue": (value: any[]) => any;
}, string, import('vue').PublicProps, Readonly<KvcTableProps> & Readonly<{
    onDelete?: ((value: any[]) => any) | undefined;
    onAdd?: ((value: any[], index: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
}>, {
    draggable: boolean;
    animation: number;
    minRows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLTableElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
