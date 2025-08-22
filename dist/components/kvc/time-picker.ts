import { KvcTimePickerProps } from '../../types/component-types';
declare const _default: import('vue').DefineComponent<KvcTimePickerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
    change: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<KvcTimePickerProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../../types/component-types').KvcTextInputProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: string) => any;
    }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('../../types/component-types').KvcTextInputProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, {}> | null;
    timeRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../../types/component-types').KvcSelectListProps> & Readonly<{
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
}, HTMLDivElement>;
export default _default;
