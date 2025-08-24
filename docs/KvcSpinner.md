# KvcSpinner

## 概要
ローディング状態を表示するスピナーコンポーネントです。非同期処理中のUIブロックなどに利用できます。

## 使用例

```vue
<template>
  <KvcSpinner v-model="visible" text="Loading..." />
</template>
```

## Props

| プロパティ | 型 | デフォルト | 説明 |
|------------|------------------|------------|--------------------------|
| `modelValue` | `Boolean` | `false` | スピナーの表示・非表示を制御 |
| `text` | `string` | `読み込み中...` | スピナーと一緒に表示するテキスト |

## Events

| イベント | 説明 |
|----------|------------------|
| `update:modelValue` | 表示状態が切り替わったときに発火 |


---

[◀ 戻る](https://git.zygapp.org/kintone-utils/kintone-vue3-component/src/branch/main/README.md)