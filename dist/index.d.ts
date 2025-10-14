import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { CreateComponentPublicInstanceWithMixins } from 'vue';
import { DefineComponent } from 'vue';
import { GlobalComponents } from 'vue';
import { GlobalDirectives } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PublicProps } from 'vue';

declare const __VLS_component: DefineComponent<KvcWrapProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
submit: (event: Event) => any;
}, string, PublicProps, Readonly<KvcWrapProps> & Readonly<{
onSubmit?: ((event: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_2: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;

declare const __VLS_component_3: DefineComponent<KvcDialogProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (...args: any[]) => void;
cancel: (...args: any[]) => void;
close: (...args: any[]) => void;
confirm: (...args: any[]) => void;
}, string, PublicProps, Readonly<KvcDialogProps> & Readonly<{
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
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_4: DefineComponent<KvcTableProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
delete: (value: any[]) => any;
add: (value: any[], index: number) => any;
"update:modelValue": (value: any[]) => any;
}, string, PublicProps, Readonly<KvcTableProps> & Readonly<{
onDelete?: ((value: any[]) => any) | undefined;
onAdd?: ((value: any[], index: number) => any) | undefined;
"onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
}>, {
draggable: boolean;
animation: number;
minRows: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLTableElement>;

declare const __VLS_component_5: DefineComponent<KvcButtonProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<KvcButtonProps> & Readonly<{}>, {
small: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;

declare const __VLS_component_6: DefineComponent<KvcFieldProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<KvcFieldProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_7: DefineComponent<KvcGroupProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<KvcGroupProps> & Readonly<{}>, {
label: string;
width: string | number;
open: boolean;
collapsible: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_8: DefineComponent<KvcTabProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string) => any;
}, string, PublicProps, Readonly<KvcTabProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_9: DefineComponent<KvcTabPaneProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<KvcTabPaneProps> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare function __VLS_template_2(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_3(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare function __VLS_template_4(): {
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

declare function __VLS_template_5(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};

declare function __VLS_template_6(): {
    attrs: Partial<{}>;
    slots: {
        label?(_: {}): any;
        prefix?(_: {}): any;
        default?(_: {}): any;
        suffix?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_7(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_8(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_9(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_TemplateResult_2 = ReturnType<typeof __VLS_template_2>;

declare type __VLS_TemplateResult_3 = ReturnType<typeof __VLS_template_3>;

declare type __VLS_TemplateResult_4 = ReturnType<typeof __VLS_template_4>;

declare type __VLS_TemplateResult_5 = ReturnType<typeof __VLS_template_5>;

declare type __VLS_TemplateResult_6 = ReturnType<typeof __VLS_template_6>;

declare type __VLS_TemplateResult_7 = ReturnType<typeof __VLS_template_7>;

declare type __VLS_TemplateResult_8 = ReturnType<typeof __VLS_template_8>;

declare type __VLS_TemplateResult_9 = ReturnType<typeof __VLS_template_9>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_6<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_7<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_8<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_9<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export { _default as KvcWrap }
export { _default as KvcWrapType }

declare const _default_10: __VLS_WithTemplateSlots_6<typeof __VLS_component_6, __VLS_TemplateResult_6["slots"]>;
export { _default_10 as KvcField }
export { _default_10 as KvcFieldType }

declare const _default_11: __VLS_WithTemplateSlots_7<typeof __VLS_component_7, __VLS_TemplateResult_7["slots"]>;
export { _default_11 as KvcGroup }
export { _default_11 as KvcGroupType }

declare const _default_12: DefineComponent<KvcRadioProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string | number | boolean | object | null) => any;
change: (value: string | number | boolean | object | null) => any;
}, string, PublicProps, Readonly<KvcRadioProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number | boolean | object | null) => any) | undefined;
onChange?: ((value: string | number | boolean | object | null) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export { _default_12 as KvcRadio }
export { _default_12 as KvcRadioType }

declare const _default_13: DefineComponent<KvcCheckboxProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: (string | number)[]) => any;
change: (value: (string | number)[]) => any;
}, string, PublicProps, Readonly<KvcCheckboxProps> & Readonly<{
"onUpdate:modelValue"?: ((value: (string | number)[]) => any) | undefined;
onChange?: ((value: (string | number)[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export { _default_13 as KvcCheckbox }
export { _default_13 as KvcCheckboxType }

declare const _default_14: DefineComponent<KvcTextInputProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string) => any;
}, string, PublicProps, Readonly<KvcTextInputProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export { _default_14 as KvcTextInput }
export { _default_14 as KvcTextInputType }

declare const _default_15: DefineComponent<KvcDatePickerProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string) => any;
change: (value: string) => any;
}, string, PublicProps, Readonly<KvcDatePickerProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onChange?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {
inputRef: CreateComponentPublicInstanceWithMixins<Readonly<KvcTextInputProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string) => any;
}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<KvcTextInputProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, {}> | null;
calendarRef: CreateComponentPublicInstanceWithMixins<Readonly<KvcDatePickerProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onClose?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string) => any;
close: (value: boolean) => any;
}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
yearRef: HTMLButtonElement;
yearListRef: CreateComponentPublicInstanceWithMixins<Readonly<KvcSelectListProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
onChange?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string | number) => any;
change: (value: string | number) => any;
}, PublicProps, {
items: (KvcItemBase | string | number)[];
labelKey: string;
valueKey: string;
}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
listWrapRef: HTMLUListElement;
}, HTMLUListElement, ComponentProvideOptions, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<KvcSelectListProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
onChange?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, {
items: (KvcItemBase | string | number)[];
labelKey: string;
valueKey: string;
}> | null;
monthRef: HTMLButtonElement;
monthListRef: CreateComponentPublicInstanceWithMixins<Readonly<KvcSelectListProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
onChange?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string | number) => any;
change: (value: string | number) => any;
}, PublicProps, {
items: (KvcItemBase | string | number)[];
labelKey: string;
valueKey: string;
}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
listWrapRef: HTMLUListElement;
}, HTMLUListElement, ComponentProvideOptions, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<KvcSelectListProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
onChange?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, {
items: (KvcItemBase | string | number)[];
labelKey: string;
valueKey: string;
}> | null;
}, HTMLDivElement, ComponentProvideOptions, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<KvcDatePickerProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onClose?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, {}> | null;
}, HTMLDivElement>;
export { _default_15 as KvcDatePicker }
export { _default_15 as KvcDatePickerType }

declare const _default_16: DefineComponent<KvcTimePickerProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string) => any;
change: (value: string) => any;
}, string, PublicProps, Readonly<KvcTimePickerProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onChange?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {
inputRef: CreateComponentPublicInstanceWithMixins<Readonly<KvcTextInputProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string) => any;
}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<KvcTextInputProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, {}> | null;
timeRef: CreateComponentPublicInstanceWithMixins<Readonly<KvcSelectListProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
onChange?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string | number) => any;
change: (value: string | number) => any;
}, PublicProps, {
items: (KvcItemBase | string | number)[];
labelKey: string;
valueKey: string;
}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
listWrapRef: HTMLUListElement;
}, HTMLUListElement, ComponentProvideOptions, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<KvcSelectListProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
onChange?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, {
items: (KvcItemBase | string | number)[];
labelKey: string;
valueKey: string;
}> | null;
}, HTMLDivElement>;
export { _default_16 as KvcTimePicker }
export { _default_16 as KvcTimePickerType }

declare const _default_17: DefineComponent<KvcDateTimePickerProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string | undefined) => any;
}, string, PublicProps, Readonly<KvcDateTimePickerProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export { _default_17 as KvcDateTimePicker }
export { _default_17 as KvcDateTimePickerType }

declare const _default_18: DefineComponent<KvcTextareaProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string) => any;
}, string, PublicProps, Readonly<KvcTextareaProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export { _default_18 as KvcTextarea }
export { _default_18 as KvcTextareaType }

declare const _default_19: DefineComponent<KvcFileSelectProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: KvcFileData[]) => any;
change: (value: KvcFileData[]) => any;
}, string, PublicProps, Readonly<KvcFileSelectProps> & Readonly<{
"onUpdate:modelValue"?: ((value: KvcFileData[]) => any) | undefined;
onChange?: ((value: KvcFileData[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {
dropZoneRef: HTMLDivElement;
sortWrapRef: HTMLUListElement;
fileSelectRef: HTMLInputElement;
}, any>;
export { _default_19 as KvcFileSelect }
export { _default_19 as KvcFileSelectType }

declare const _default_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, __VLS_TemplateResult_2["slots"]>;
export { _default_2 as KvcRow }
export { _default_2 as KvcRowType }

declare const _default_20: __VLS_WithTemplateSlots_8<typeof __VLS_component_8, __VLS_TemplateResult_8["slots"]>;
export { _default_20 as KvcTab }
export { _default_20 as KvcTabType }

declare const _default_21: __VLS_WithTemplateSlots_9<typeof __VLS_component_9, __VLS_TemplateResult_9["slots"]>;
export { _default_21 as KvcTabPane }
export { _default_21 as KvcTabPaneType }

declare const _default_3: DefineComponent<KvcSpinner_2, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<KvcSpinner_2> & Readonly<{
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
text: string;
modelValue: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export { _default_3 as KvcSpinner }
export { _default_3 as KvcSpinnerType }

declare const _default_4: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, __VLS_TemplateResult_3["slots"]>;
export { _default_4 as KvcDialog }
export { _default_4 as KvcDialogType }

declare const _default_5: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, __VLS_TemplateResult_4["slots"]>;
export { _default_5 as KvcTable }
export { _default_5 as KvcTableType }

declare const _default_6: DefineComponent<KvcDropdownProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string | number | null) => any;
change: (value: string | number | null) => any;
}, string, PublicProps, Readonly<KvcDropdownProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
onChange?: ((value: string | number | null) => any) | undefined;
}>, {
disabled: boolean;
width: string | number;
readOnly: boolean;
items: KvcItemBase[];
nonstyled: boolean;
itemLabel: string;
itemValue: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
dropdownRef: HTMLDivElement;
buttonRef: HTMLButtonElement;
selectListRef: CreateComponentPublicInstanceWithMixins<Readonly<KvcSelectListProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
onChange?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string | number) => any;
change: (value: string | number) => any;
}, PublicProps, {
items: (KvcItemBase | string | number)[];
labelKey: string;
valueKey: string;
}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
listWrapRef: HTMLUListElement;
}, HTMLUListElement, ComponentProvideOptions, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<KvcSelectListProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
onChange?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, {
items: (KvcItemBase | string | number)[];
labelKey: string;
valueKey: string;
}> | null;
}, any>;
export { _default_6 as KvcDropdown }
export { _default_6 as KvcDropdownType }

declare const _default_7: DefineComponent<KvcAutocompleteProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string | number | null) => any;
change: (value: string | number | null) => any;
input: (value: string) => any;
}, string, PublicProps, Readonly<KvcAutocompleteProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
onChange?: ((value: string | number | null) => any) | undefined;
onInput?: ((value: string) => any) | undefined;
}>, {
disabled: boolean;
width: string | number;
readOnly: boolean;
items: (KvcItemBase | string | number)[];
nonstyled: boolean;
itemLabel: string;
itemValue: string;
itemDisabled: string;
clearable: boolean;
placeholder: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
buttonRef: HTMLButtonElement;
autocompleteRef: HTMLDivElement;
inputRef: HTMLInputElement;
selectListRef: CreateComponentPublicInstanceWithMixins<Readonly<KvcSelectListProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
onChange?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: string | number) => any;
change: (value: string | number) => any;
}, PublicProps, {
items: (KvcItemBase | string | number)[];
labelKey: string;
valueKey: string;
}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {
listWrapRef: HTMLUListElement;
}, HTMLUListElement, ComponentProvideOptions, {
P: {};
B: {};
D: {};
C: {};
M: {};
Defaults: {};
}, Readonly<KvcSelectListProps> & Readonly<{
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
onChange?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, {
items: (KvcItemBase | string | number)[];
labelKey: string;
valueKey: string;
}> | null;
}, any>;
export { _default_7 as KvcAutocomplete }
export { _default_7 as KvcAutocompleteType }

declare const _default_8: DefineComponent<KvcMultiSelectProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {} & {
"update:modelValue": (value: (string | number)[]) => any;
change: (value: (string | number)[]) => any;
}, string, PublicProps, Readonly<KvcMultiSelectProps> & Readonly<{
"onUpdate:modelValue"?: ((value: (string | number)[]) => any) | undefined;
onChange?: ((value: (string | number)[]) => any) | undefined;
}>, {
disabled: boolean;
modelValue: (string | number)[];
readOnly: boolean;
items: KvcItemBase[];
nonstyled: boolean;
itemLabel: string;
itemValue: string;
rows: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
listWrapRef: HTMLUListElement;
}, any>;
export { _default_8 as KvcMultiSelect }
export { _default_8 as KvcMultiSelectType }

declare const _default_9: __VLS_WithTemplateSlots_5<typeof __VLS_component_5, __VLS_TemplateResult_5["slots"]>;
export { _default_9 as KvcButton }
export { _default_9 as KvcButtonType }

export declare const defaultSpinner: Spinner;

export declare interface DropdownItem extends KvcItemBase {
    icon?: string;
}

export declare const hideSpinner: () => void;

declare const KintoneVueComponent: Plugin_2;
export default KintoneVueComponent;

export declare interface KvcAutocompleteProps {
    width?: string | number;
    nonstyled?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    items: (KvcItemBase | string | number)[];
    itemLabel?: string;
    itemValue?: string;
    itemDisabled?: string;
    modelValue: string | number | null;
    clearable?: boolean;
    placeholder?: string;
}

export declare interface KvcButtonProps {
    small?: boolean;
    color?: '' | 'normal' | 'success' | 'save' | 'error';
}

export declare type KvcCheckboxItem = KvcItemBase;

export declare interface KvcCheckboxProps {
    column?: boolean;
    readOnly?: boolean;
    nonstyled?: boolean;
    itemLabel?: string;
    itemValue?: string;
    items: (KvcItemBase | string | number)[];
    modelValue: (string | number)[];
}

export declare interface KvcDatePickerProps {
    modelValue?: string;
    readOnly?: boolean;
    disabled?: boolean;
    nonstyled?: boolean;
}

export declare interface KvcDateTimePickerProps {
    modelValue?: string;
    readOnly?: boolean;
    disabled?: boolean;
    nonstyled?: boolean;
}

export declare interface KvcDialogProps {
    modelValue: boolean;
    width?: string | number;
    title?: string;
    showIcon?: boolean;
    iconType?: 'info' | 'warning' | 'error' | 'success' | 'question';
    cancelText?: string;
    confirmText?: string;
    showCancel?: boolean;
    showConfirm?: boolean;
}

export declare interface KvcDropdownProps {
    width?: string | number;
    nonstyled?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    items: KvcItemBase[];
    itemLabel?: string;
    itemValue?: string;
    modelValue: string | number | null;
}

export declare interface KvcFieldProps {
    required?: boolean;
    width?: string | number;
    errorMessage?: string;
    successMessage?: string;
}

export declare interface KvcFileData {
    fileKey?: string;
    name: string;
    size: number;
    contentType?: string;
    data?: ArrayBuffer;
}

export declare interface KvcFileSelectProps {
    modelValue: KvcFileData[];
    disabled?: boolean;
    readOnly?: boolean;
    multiple?: boolean;
    accept?: string;
    autoUpload?: boolean;
}

export declare interface KvcGroupProps {
    label?: string;
    open?: boolean;
    collapsible?: boolean;
    width?: string | number;
}

/**
 * 各コンポーネント型定義
 */
export declare interface KvcItemBase {
    label?: string;
    value?: string | number;
    disabled?: boolean;
    [key: string]: any;
}

export declare interface KvcMultiSelectProps {
    modelValue: (string | number)[];
    items: KvcItemBase[];
    itemLabel?: string;
    itemValue?: string;
    nonstyled?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    rows?: number;
}

export declare type KvcRadioItem = KvcItemBase;

export declare interface KvcRadioProps {
    column?: boolean;
    readOnly?: boolean;
    nonstyled?: boolean;
    itemLabel?: string;
    itemValue?: string;
    items: (KvcItemBase | string | number)[];
    modelValue: string | number | boolean | object | null;
}

export declare interface KvcSelectListProps {
    items: (KvcItemBase | string | number)[];
    modelValue: string | number | null;
    value?: string | number | null;
    labelKey?: string;
    valueKey?: string;
    height?: string | number;
    maxHeight?: string | number;
}

declare interface KvcSpinner_2 {
    modelValue: boolean;
    text: string;
}

export declare interface KvcTableColumn {
    code?: string;
    label?: string;
    width?: string | number;
    [key: string]: any;
}

export declare interface KvcTableProps {
    readOnly?: boolean;
    rowData?: KvcTableRowMeta[];
    columns: (KvcTableColumn | string)[];
    modelValue: Record<string, any>[];
    hideOperations?: boolean;
    recordUrl?: string | null;
    draggable: boolean;
    animation: number;
    minRows?: number;
    maxRows?: number;
}

export declare interface KvcTableRowMeta {
    code: string;
    key: string;
}

export declare interface KvcTabPaneProps {
    label: string;
    name: string;
}

export declare interface KvcTabProps {
    small?: boolean;
    modelValue: string;
    width?: string | number;
    height?: string | number;
}

export declare interface KvcTextareaProps {
    modelValue: string;
    nonstyled?: boolean;
    readOnly?: boolean;
    width?: string;
}

export declare interface KvcTextInputProps {
    modelValue?: string;
    nonstyled?: boolean;
    readOnly?: boolean;
    width?: string;
    type?: string;
    placeholder?: string;
    min?: string | number;
    max?: string | number;
}

export declare interface KvcTimePickerProps {
    modelValue?: string;
    readOnly?: boolean;
    disabled?: boolean;
}

export declare interface KvcWrapProps {
    isForm?: boolean;
}

export declare type SelectListItem = KvcItemBase;

export declare const showSpinner: (text?: string) => Spinner;

export declare class Spinner {
    private options;
    constructor(options?: SpinnerOptions);
    open(text?: string): void;
    close(): void;
    update(text: string): void;
    isOpen(): boolean;
}

declare interface SpinnerOptions {
    text?: string;
}

export declare const useSpinner: () => {
    spinnerState: {
        readonly isVisible: boolean;
        readonly text: string;
    };
    createSpinner: (options?: SpinnerOptions) => Spinner;
};

export { }
