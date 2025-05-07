# KvcFileSelect

## 概要

ファイル選択・アップロードコンポーネントです。Kintone API と連携可能。

## 使用例

```vue
<template>
  <KvcFileSelect v-model="files" :multiple="true" />
</template>
```

## Props

| プロパティ   | 型        | デフォルト  | 説明                           |
| ------------ | --------- | ----------- | ------------------------------ |
| `modelValue` | `Array`   | `[]`        | バインドされるファイル情報配列 |
| `disabled`   | `boolean` | `false`     | 非活性状態                     |
| `readOnly`   | `boolean` | `false`     | 読み取り専用                   |
| `multiple`   | `boolean` | `false`     | 複数ファイル対応               |
| `accept`     | `string`  | `undefined` | 受け入れるファイル形式         |
| `autoUpload` | `boolean` | `true`      | 自動アップロード有効           |

## Events

| イベント            | 説明                 |
| ------------------- | -------------------- |
| `update:modelValue` | ファイル変更時に発火 |
| `change`            | ファイル変更時に発火 |

---

[◀ 戻る](../README.md)
