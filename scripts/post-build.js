import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const indexDtsPath = resolve('dist/index.d.ts');

// ファイルを読み込む
let indexDts = readFileSync(indexDtsPath, 'utf-8');

// vite-plugin-dts が生成した declare module 'vue' を検出して置き換え
const declareModulePattern = /declare module 'vue' \{[\s\S]*?export interface GlobalComponents \{[\s\S]*?\}\s*\}/;

// 正しいグローバル型定義
const correctGlobalTypes = `declare module 'vue' {
  export interface GlobalComponents {
    KvcWrap: typeof import('@zygapp/kintone-vue3-component')['KvcWrap']
    KvcRow: typeof import('@zygapp/kintone-vue3-component')['KvcRow']
    KvcSpinner: typeof import('@zygapp/kintone-vue3-component')['KvcSpinner']
    KvcDialog: typeof import('@zygapp/kintone-vue3-component')['KvcDialog']
    KvcTable: typeof import('@zygapp/kintone-vue3-component')['KvcTable']
    KvcDropdown: typeof import('@zygapp/kintone-vue3-component')['KvcDropdown']
    KvcAutocomplete: typeof import('@zygapp/kintone-vue3-component')['KvcAutocomplete']
    KvcMultiSelect: typeof import('@zygapp/kintone-vue3-component')['KvcMultiSelect']
    KvcButton: typeof import('@zygapp/kintone-vue3-component')['KvcButton']
    KvcField: typeof import('@zygapp/kintone-vue3-component')['KvcField']
    KvcGroup: typeof import('@zygapp/kintone-vue3-component')['KvcGroup']
    KvcRadio: typeof import('@zygapp/kintone-vue3-component')['KvcRadio']
    KvcCheckbox: typeof import('@zygapp/kintone-vue3-component')['KvcCheckbox']
    KvcTextInput: typeof import('@zygapp/kintone-vue3-component')['KvcTextInput']
    KvcDatePicker: typeof import('@zygapp/kintone-vue3-component')['KvcDatePicker']
    KvcTimePicker: typeof import('@zygapp/kintone-vue3-component')['KvcTimePicker']
    KvcDateTimePicker: typeof import('@zygapp/kintone-vue3-component')['KvcDateTimePicker']
    KvcTextarea: typeof import('@zygapp/kintone-vue3-component')['KvcTextarea']
    KvcFileSelect: typeof import('@zygapp/kintone-vue3-component')['KvcFileSelect']
    KvcTab: typeof import('@zygapp/kintone-vue3-component')['KvcTab']
    KvcTabPane: typeof import('@zygapp/kintone-vue3-component')['KvcTabPane']
  }
}`;

if (declareModulePattern.test(indexDts)) {
  // 既存の declare module 'vue' を正しい形式に置き換え
  indexDts = indexDts.replace(declareModulePattern, correctGlobalTypes);
  writeFileSync(indexDtsPath, indexDts, 'utf-8');
  console.log('✓ Global component types updated in dist/index.d.ts');
} else {
  // declare module 'vue' がなければ追加
  indexDts += '\n\n' + correctGlobalTypes + '\n';
  writeFileSync(indexDtsPath, indexDts, 'utf-8');
  console.log('✓ Global component types added to dist/index.d.ts');
}
