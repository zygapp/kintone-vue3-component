# KvcTextInput

## 概要

基本的なテキスト入力コンポーネントです。

## 使用例

```vue
<template>
  <KvcTextInput v-model="text" placeholder="入力してください" />
</template>
```

## Props

| プロパティ    | 型                 | デフォルト | 説明           |
| ------------- | ------------------ | ---------- | -------------- |
| `modelValue`  | `string`           | `''`       | バインド値     |
| `nonstyled`   | `boolean`          | `false`    | スタイル無効化 |
| `readOnly`    | `boolean`          | `false`    | 読み取り専用   |
| `width`       | `string`           | `'150px'`  | 幅設定         |
| `type`        | `string`           | `'text'`   | 入力タイプ     |
| `placeholder` | `string`           | `''`       | プレースホルダ |
| `min`         | `string \| number` | -          | 最小値         |
| `max`         | `string \| number` | -          | 最大値         |

## Events

| イベント            | 説明             |
| ------------------- | ---------------- |
| `update:modelValue` | 入力変更時に発火 |

---

[◀ 戻る](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/README.md)
