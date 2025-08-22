# KvcTimePicker

## 概要

時間選択用のドロップダウン付きコンポーネントです。

## 使用例

```vue
<template>
  <KvcTimePicker v-model="time" />
</template>
```

## Props

| プロパティ   | 型        | デフォルト | 説明                |
| ------------ | --------- | ---------- | ------------------- |
| `modelValue` | `string`  | `''`       | バインド値（HH:mm） |
| `readOnly`   | `boolean` | `false`    | 読み取り専用        |
| `disabled`   | `boolean` | `false`    | 非活性状態          |

## Events

| イベント            | 説明           |
| ------------------- | -------------- |
| `update:modelValue` | 値変更時に発火 |
| `change`            | 値変更時に発火 |

---

[◀ 戻る](<REPO_BASE>/README.md)
