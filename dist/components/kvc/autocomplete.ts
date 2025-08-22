import { KvcAutocompleteProps } from '../../types/component-types';
declare const _default: import('vue').DefineComponent<KvcAutocompleteProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | number | null) => any;
    change: (value: string | number | null) => any;
    input: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<KvcAutocompleteProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    onChange?: ((value: string | number | null) => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
}>, {
    width: string | number;
    readOnly: boolean;
    disabled: boolean;
    items: (import('../../types/component-types').KvcItemBase | string | number)[];
    nonstyled: boolean;
    itemLabel: string;
    itemValue: string;
    itemDisabled: string;
    clearable: boolean;
    placeholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    buttonRef: HTMLButtonElement;
    autocompleteRef: HTMLDivElement;
    inputRef: HTMLInputElement;
    selectListRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../../types/component-types').KvcSelectListProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        onChange?: ((value: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: string | number) => any;
        change: (value: string | number) => any;
    }, import('vue').PublicProps, {
        items: (import('../../types/component-types').KvcItemBase | string | number)[];
        labelKey: string;
        valueKey: string;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        listWrapRef: HTMLUListElement;
    }, HTMLUListElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('../../types/component-types').KvcSelectListProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        onChange?: ((value: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        items: (import('../../types/component-types').KvcItemBase | string | number)[];
        labelKey: string;
        valueKey: string;
    }> | null;
}, any>;
export default _default;
