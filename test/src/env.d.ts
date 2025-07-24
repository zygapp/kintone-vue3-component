/// <reference types="vite/client" />

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    KvcButton: typeof import('@zygapp/kintone-vue3-component')['KvcButton'];
    KvcDatePicker: typeof import('@zygapp/kintone-vue3-component')['KvcDatePicker'];
    KvcDateTimePicker: typeof import('@zygapp/kintone-vue3-component')['KvcDateTimePicker'];
    KvcTimePicker: typeof import('@zygapp/kintone-vue3-component')['KvcTimePicker'];
    KvcCheckbox: typeof import('@zygapp/kintone-vue3-component')['KvcCheckbox'];
    KvcRadio: typeof import('@zygapp/kintone-vue3-component')['KvcRadio'];
    KvcDropdown: typeof import('@zygapp/kintone-vue3-component')['KvcDropdown'];
    KvcTextInput: typeof import('@zygapp/kintone-vue3-component')['KvcTextInput'];
    KvcTextarea: typeof import('@zygapp/kintone-vue3-component')['KvcTextarea'];
    KvcFileSelect: typeof import('@zygapp/kintone-vue3-component')['KvcFileSelect'];
    KvcTable: typeof import('@zygapp/kintone-vue3-component')['KvcTable'];
    KvcTab: typeof import('@zygapp/kintone-vue3-component')['KvcTab'];
    KvcTabPane: typeof import('@zygapp/kintone-vue3-component')['KvcTabPane'];
    KvcWrap: typeof import('@zygapp/kintone-vue3-component')['KvcWrap'];
    KvcRow: typeof import('@zygapp/kintone-vue3-component')['KvcRow'];
    KvcField: typeof import('@zygapp/kintone-vue3-component')['KvcField'];
  }
}

export {};