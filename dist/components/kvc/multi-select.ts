import { KvcItemBase, KvcMultiSelectProps } from '../../types/component-types';
declare const _default: import('vue').DefineComponent<KvcMultiSelectProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: (string | number)[]) => any;
    change: (value: (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<KvcMultiSelectProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: (string | number)[]) => any) | undefined;
    onChange?: ((value: (string | number)[]) => any) | undefined;
}>, {
    modelValue: (string | number)[];
    readOnly: boolean;
    disabled: boolean;
    items: KvcItemBase[];
    nonstyled: boolean;
    itemLabel: string;
    itemValue: string;
    rows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    listWrapRef: HTMLUListElement;
}, any>;
export default _default;
