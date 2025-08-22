import { KvcSelectListProps } from '../../../types/component-types';
declare const _default: import('vue').DefineComponent<KvcSelectListProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | number) => any;
    change: (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<KvcSelectListProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
}>, {
    items: (import('../../../types/component-types').KvcItemBase | string | number)[];
    labelKey: string;
    valueKey: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    listWrapRef: HTMLUListElement;
}, HTMLUListElement>;
export default _default;
