import { KvcDialogProps } from '../../types/component-types';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<KvcDialogProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    cancel: (...args: any[]) => void;
    close: (...args: any[]) => void;
    confirm: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<KvcDialogProps> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: boolean;
    title: string;
    showIcon: boolean;
    iconType: "info" | "warning" | "error" | "success" | "question";
    cancelText: string;
    confirmText: string;
    showCancel: boolean;
    showConfirm: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
