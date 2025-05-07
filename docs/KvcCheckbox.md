# KvcCheckbox

## 概要

複数選択可能なチェックボックスコンポーネントです。

## 使用例

```vue
<template>
  <KvcCheckbox
    v-model="selected"
    :items="[
      { label: '選択肢1', value: 'a' },
      { label: '選択肢2', value: 'b' },
    ]"
  />
</template>
```

## Props

| プロパティ   | 型        | デフォルト | 説明                     |
| ------------ | --------- | ---------- | ------------------------ |
| `column`     | `boolean` | `false`    | 縦並びで表示             |
| `readOnly`   | `boolean` | `false`    | 読み取り専用モード       |
| `nonstyled`  | `boolean` | `false`    | スタイルなし表示         |
| `itemLabel`  | `string`  | `'label'`  | 表示に使うラベルのキー名 |
| `itemValue`  | `string`  | `'value'`  | 値に使うキー名           |
| `items`      | `Array`   | `[]`       | 選択肢リスト。<br>各要素は文字列、または `{ label, value, disabled }` を含むオブジェクト。<br>例: `[{ label: 'A', value: 'a', disabled: true }]`|
| `modelValue` | `Array`   | `[]`       | バインド値               |

## Events

| イベント            | 説明                 |
| ------------------- | -------------------- |
| `update:modelValue` | 値変更時に発火       |
| `change`            | チェック変更時に発火 |

---

[◀ 戻る](../README.md)
