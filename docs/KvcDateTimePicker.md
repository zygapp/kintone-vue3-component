# KvcDateTimePicker

## 概要

日付＋時間の複合入力用コンポーネントです。

## 使用例

```vue
<template>
  <KvcDateTimePicker v-model="datetime" />
</template>
```

## Props

| プロパティ   | 型        | デフォルト | 説明           |
| ------------ | --------- | ---------- | -------------- |
| `modelValue` | `string`  | `''`       | ISO 形式日時   |
| `readOnly`   | `boolean` | `false`    | 読み取り専用   |
| `disabled`   | `boolean` | `false`    | 非活性状態     |
| `nonstyled`  | `boolean` | `false`    | スタイル無効化 |

## Events

| イベント            | 説明           |
| ------------------- | -------------- |
| `update:modelValue` | 値変更時に発火 |

---

[◀ 戻る](<REPO_BASE>/README.md)
