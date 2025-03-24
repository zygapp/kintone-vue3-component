# KvcDatePicker

## 概要
日付入力用のコンポーネントです。ポップアップカレンダー付き。

## 使用例

```vue
<template>
  <KvcDatePicker v-model="date" />
</template>
```

## Props

| プロパティ | 型 | デフォルト | 説明 |
|------------|------------------|------------|-------------------------|
| `modelValue` | `string` | `''` | バインド値（YYYY-MM-DD） |
| `readOnly` | `boolean` | `false` | 読み取り専用 |
| `disabled` | `boolean` | `false` | 非活性状態 |
| `nonstyled` | `boolean` | `false` | スタイル無効化 |

## Events

| イベント | 説明 |
|----------|------------------|
| `update:modelValue` | 値変更時に発火 |
| `change` | 日付選択変更時に発火 |



---

[◀ 戻る](../README.md)