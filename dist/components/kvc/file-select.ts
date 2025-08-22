import { KvcFileSelectProps, KvcFileData } from '../../types/component-types';
declare const _default: import('vue').DefineComponent<KvcFileSelectProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: KvcFileData[]) => any;
    change: (value: KvcFileData[]) => any;
}, string, import('vue').PublicProps, Readonly<KvcFileSelectProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: KvcFileData[]) => any) | undefined;
    onChange?: ((value: KvcFileData[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropZoneRef: HTMLDivElement;
    sortWrapRef: HTMLUListElement;
    fileSelectRef: HTMLInputElement;
}, any>;
export default _default;
